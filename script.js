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

console.log(books)
removeBook(2)
console.log(books)
