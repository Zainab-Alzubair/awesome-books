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
}

const removeBook =(id)=> {
  books =books.filter((book)=>{
  return book.id !== id
  })
}

const booksSection = document.getElementById('books')

books.forEach(book => {
  const bookElement = document.createElement('div');
  bookElement.innerHTML = `
    <p>${book.title}</p>
    <p>${book.author}</p>
    <button>Remove</button>
    <hr>
  `;
  
  booksSection.appendChild(bookElement);
})
