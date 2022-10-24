const books =[
  {
  title:"JavaScript",
  author:"Zainab",
},
{
  title:"Html",
  author:"Zainab",
},
{
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


