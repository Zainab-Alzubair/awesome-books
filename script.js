const uid = () => Date.now().toString(36) + Math.random().toString(36).substr(2);

const booksSection = document.getElementById('books');
const addBtn = document.getElementById('add-btn');

let books = [];

class Books {
  constructor(id , title, author){
    this.id = id;
    this.title = title;
    this.author = author;
  }

   addBook = () => {
    books.push(this);
  };
  
   removeBook = () => {
    books = books.filter((book) => book.id !== this.id);
  };
}

const addRemoveListener = (book) => {
  document.getElementById(`remove-${book.id}`).addEventListener('click', (e) => {
    e.preventDefault();
    book.removeBook();
    const bookID = document.getElementById(`book-${book.id}`);
    if (bookID.parentNode) {
      bookID.parentNode.removeChild(bookID);
    }
  });
};

const appendBook = (book) => {
  const bookElement = document.createElement('div');
  bookElement.id = `book-${book.id}`;
  bookElement.innerHTML = `
    <p>${book.title}</p>
    <p>${book.author}</p>
    <button id="remove-${book.id}">Remove</button>
    <hr>
  `;

  booksSection.appendChild(bookElement);
};

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;
  let book = new Books(uid(), bookTitle, bookAuthor);
  book.addBook();
  appendBook(book);
  addRemoveListener(book);
});
