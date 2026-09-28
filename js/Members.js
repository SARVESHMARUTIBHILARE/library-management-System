const STORAGE_KEY = 'members';

function loadMembers() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    } catch (error) {
        console.error('Could not load members:', error);
        return [];
    }
}

function saveMembers() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(members));
}

let members = loadMembers();
const table = document.getElementById('memberTable');
const modal = document.getElementById('modal');
const form = document.getElementById('memberForm');
const search = document.getElementById('search');
const editId = document.getElementById('editId');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const modalTitle = document.getElementById('modalTitle');

function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[char]));
}

function render(query = '') {
    const q = query.trim().toLowerCase();
    const filtered = members.filter(m => `${m.name} ${m.email} ${m.phone}`.toLowerCase().includes(q));
    if (!filtered.length) {
        table.innerHTML = '<tr><td colspan="6">No members found.</td></tr>';
        return;
    }
    table.innerHTML = filtered.map(m => `<tr><td>${m.id}</td><td><b>${escapeHtml(m.name)}</b></td><td>${escapeHtml(m.email)}</td><td>${escapeHtml(m.phone)}</td><td>${escapeHtml(m.joined)}</td><td><button class="btn small" type="button" onclick="editMember(${m.id})">Edit</button> <button class="btn danger small" type="button" onclick="deleteMember(${m.id})">Delete</button></td></tr>`).join('');
}

function openModal(member = null) {
    form.reset();
    if (member) {
        modalTitle.textContent = 'Edit Member';
        editId.value = member.id;
        nameInput.value = member.name;
        emailInput.value = member.email;
        phoneInput.value = member.phone;
    } else {
        modalTitle.textContent = 'Add Member';
        editId.value = '';
    }
    modal.classList.add('show');
    nameInput.focus();
}

function closeModal() { modal.classList.remove('show'); }

document.getElementById('addMemberBtn').addEventListener('click', () => openModal());
document.getElementById('closeModal').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });

form.addEventListener('submit', e => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const id = Number(editId.value);
    if (!name || !email || !phone) { alert('Please fill all member details.'); return; }

    if (id) {
        const member = members.find(m => m.id === id);
        if (member) Object.assign(member, { name, email, phone });
    } else {
        members.push({ id: Date.now(), name, email, phone, joined: new Date().toISOString().slice(0,10) });
    }
    saveMembers();
    render(search.value);
    closeModal();
    alert(id ? 'Member updated successfully!' : 'New member saved successfully!');
});

window.editMember = id => { const m = members.find(x => x.id === id); if (m) openModal(m); };
window.deleteMember = id => { const m = members.find(x => x.id === id); if (m && confirm(`Delete ${m.name}?`)) { members = members.filter(x => x.id !== id); saveMembers(); render(search.value); } };
search.addEventListener('input', () => render(search.value));
render();
