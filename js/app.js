const get=(k,d=[])=>JSON.parse(localStorage.getItem(k)||JSON.stringify(d));
function seed(){if(!localStorage.getItem('books'))
  localStorage.setItem('books',JSON.stringify(
    [{id:1,title:'Clean Code',author:'Robert C. Martin',category:'Programming',year:2008,copies:5,available:4},
     {id:2,title:'The Alchemist',author:'Paulo Coelho',category:'Fiction',year:1988,copies:3,available:3},
     {id:3,title:'Database System Concepts',author:'Silberschatz',category:'Database',year:2019,copies:4,available:4}
    ]));
if(!localStorage.getItem('members'))
  localStorage.setItem('members',JSON.stringify([{id:1,name:'Aarav Patel',email:'aarav@example.com',phone:'9876543210',joined:'2026-09-01'},
                                                 {id:2,name:'Riya Shah',email:'riya@example.com',phone:'9876501234',joined:'2026-09-05'}
                                                ]));
if(!localStorage.getItem('issues'))localStorage.setItem('issues',JSON.stringify([]))}
seed();
const books=get('books'),
  members=get('members'),
  issues=get('issues');
document.getElementById('totalBooks').textContent=books.reduce((s,b)=>s+b.copies,0);
document.getElementById('totalMembers').textContent=members.length;
document.getElementById('issuedBooks').textContent=issues.filter(x=>x.status==='Issued').length;
document.getElementById('totalFine').textContent='₹'+issues.reduce((s,x)=>s+(x.fine||0),0);
document.getElementById('date').textContent=new Date().toLocaleDateString('en-IN',{dateStyle:'full'});
const tbody=document.getElementById('recent');
issues.slice(-5).reverse().forEach(x=>{const tr=document.createElement('tr');tr.innerHTML=`<td>${x.bookName}</td><td>
${x.memberName}</td><td>${x.issueDate}</td><td>
${x.dueDate}</td><td>
<span class="badge ${x.status==='Issued'?'issued':'returned'}">${x.status}</span></td>`;
                                       tbody.appendChild(tr)});if(!issues.length)tbody.innerHTML='<tr><td colspan="5">No issued books yet.</td></tr>';
