let books =[
  {
  id:0,
  title:"JavaScript",
  author:"Zainab",
},
{
  id:1,
  title:"Html",
  author:"Zainab",
},
{
  id:2,
  title:"Ruby",
  author:"Zainab",
},
];

const addBook = (title, author) => {
  let book = {
    title: title,
    author: author
  }

  books.push(book);
  return book;
}

const removeBook =(id)=> {
  books =books.filter((book)=>{
  return book.id !== id
  })
}


const booksSection = document.getElementById('books')

books.forEach(book => {
  const bookElement = document.createElement('div');
  bookElement.id = `book-${book.id}`
  bookElement.innerHTML = `
    <p>${book.title}</p>
    <p>${book.author}</p>
    <button class="remove">Remove</button>
    <hr>
  `;
  
  booksSection.appendChild(bookElement);
})

const addBtn = document.getElementById('add-btn')
addBtn.addEventListener('click',()=>{
  const bookTitle = document.getElementById('title').value
  const bookAuthor = document.getElementById('author').value
  let newBook = addBook(bookTitle,bookAuthor)
  const bookElement = document.createElement('div');
  bookElement.innerHTML = `
    <p>${newBook.title}</p>
    <p>${newBook.author}</p>
    <button class="remove">Remove</button>
    <hr>
  `;

  booksSection.appendChild(bookElement);
})

let removeButtons = document.getElementsByClassName('remove')
for (let i = 0; i < removeButtons.length; i++) {
  removeButtons[i].addEventListener('click', () => {
    removeBook(i);
    const bookID = document.getElementById(`book-${i}`);
    if (bookID.parentNode) {
      bookID.parentNode.removeChild(bookID);
    };
  });
}
