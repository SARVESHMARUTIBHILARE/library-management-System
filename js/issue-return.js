const get=(k,d=[])=>JSON.parse(localStorage.getItem(k)||JSON.stringify(d));
let books=get('books'),members=get('members'),issues=get('issues');
const bs=document.getElementById('bookSelect'),
  ms=document.getElementById('memberSelect'),
  table=document.getElementById('issueTable');
function options()
{
bs.innerHTML=books.filter(b=>b.available>0)
.map(b=>`<option value="${b.id}">${b.title} (${b.available} available)</option>`).join('');
ms.innerHTML=members.map(m=>`<option value="${m.id}">${m.name}</option>`).join('');
}
function fine(i)
{if(i.status==='Returned')return i.fine||0;
 const days=Math.max(0,Math.ceil((Date.now()-new Date(i.dueDate))/86400000));return days*5}
function render(q=''){table.innerHTML='';issues.filter(i=>(i.bookName+i.memberName+i.status)
  .toLowerCase().includes(q.toLowerCase())).forEach(i=>{const f=fine(i),tr=document.createElement('tr');
tr.innerHTML=`<td>
${i.bookName}</td>
<td>${i.memberName}</td>
<td>${i.issueDate}</td>
<td>${i.dueDate}</td>
<td>₹${f}</td>
<td><span class="badge ${i.status==='Issued'?(f?'overdue':'issued'):'returned'}">
${i.status}${i.status==='Issued'&&f?' (Overdue)':''}</span></td>
<td>${i.status==='Issued'?`<button class="btn small" onclick="returnBook(${i.id})">Return</button>`:'—'}</td>`;
table.appendChild(tr)});
if(!table.children.length)table.innerHTML='<tr>
  <td colspan="7">No issue records found.</td>
</tr>'}
document.getElementById('issueForm')
.onsubmit=e=>{e.preventDefault();
const b=books.find(x=>x.id===Number(bs.value)),
  m=members.find(x=>x.id===Number(ms.value));
  if(!b||!m)return;issues.push({id:Date.now(),
  bookId:b.id,
  bookName:b.title,
  memberId:m.id,
  memberName:m.name,
  issueDate:new Date().toISOString().slice(0,10),
  dueDate:dueDate.value,status:'Issued',fine:0});
  b.available--;localStorage.setItem('books',JSON.stringify(books));
  localStorage.setItem('issues',JSON.stringify(issues));
  e.target.reset();options();render();alert('Book issued successfully!')};
function returnBook(id)
{const i=issues.find(x=>x.id===id),
  b=books.find(x=>x.id===i.bookId);
 i.status='Returned';i.fine=fine(i);
 if(b)b.available++;
 localStorage.setItem('books',JSON.stringify(books));
 localStorage.setItem('issues',JSON.stringify(issues));
 options();
 render()}
search.oninput=e=>render(e.target.value);
                      options();
                      render();
