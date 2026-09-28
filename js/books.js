const get=(k,d=[])=>JSON.parse(localStorage.getItem(k)||JSON.stringify(d));
let books=get('books');
const table=document.getElementById('bookTable'),
  modal=document.getElementById('modal'),
  form=document.getElementById('bookForm');
function render(q='')
{table.innerHTML='';
 books.filter(b=>(b.title+b.author+b.category)
   .toLowerCase().includes(q.toLowerCase()))
   .forEach(b=>{const tr=document.createElement('tr')
tr.innerHTML=`<td>${b.id}</td><td>
<b>${b.title}</b>
</td>
<td>${b.author}</td>
<td>${b.category}</td>
<td>${b.year}</td>
<td>${b.copies}</td>
<td>${b.available}</td>
<td><button class="btn small" onclick="editBook(${b.id})">Edit</button>
<button class="btn danger small" onclick="deleteBook(${b.id})">Delete</button></td>`;
table.appendChild(tr)});
 if(!table.children.length)table.innerHTML='<tr><td colspan="8">No books found.</td></tr>'}
function openModal(){form.reset();
document.getElementById('editId').value='';
document.getElementById('modalTitle').textContent='Add Book';modal.classList.add('show')}
function closeModal(){modal.classList.remove('show')}
function editBook(id){const b=books.find(x=>x.id===id);
openModal();document.getElementById('modalTitle').textContent='Edit Book';
document.getElementById('editId').value=id;
            title.value=b.title;
                      author.value=b.author;
                      category.value=b.category;
                      year.value=b.year;
                      copies.value=b.copies}
function deleteBook(id)
{if(confirm('Delete this book?')){books=books.filter(b=>b.id!==id);
                                  localStorage.setItem('books',JSON.stringify(books));render()}}
form.onsubmit=e=>{e.preventDefault();
                  const id=Number(editId.value);
                  const data={title:title.value.trim(),
                              author:author.value.trim(),
                              category:category.value.trim(),
                              year:Number(year.value),
                              copies:Number(copies.value)};
if(id){const b=books.find(x=>x.id===id), 
  used=b.copies-b.available;b.title=data.title;
       b.author=data.author;b.category=data.category;
       b.year=data.year;b.copies=data.copies;
       b.available=Math.max(0,data.copies-used)}
else books
  .push({id:Date.now(),...data,available:data.copies});
                  localStorage.setItem('books',JSON.stringify(books));
                  closeModal();render()};search.oninput=e=>render(e.target.value);
render();
