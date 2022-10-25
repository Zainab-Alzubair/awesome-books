const uid = () => Date.now().toString(36) + Math.random().toString(36).substr(2);

const booksSection = document.getElementById('library');
const addBtn = document.getElementById('add-btn');

let library = [];

class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  addBook = () => {
    library.push(this);
  };

  removeBook = () => {
    library = library.filter((book) => book.id !== this.id);
  };
}

const book1 = new Book(uid(), 'Html', 'Jack');
const book2 = new Book(uid(), 'JavaScript', 'Jane');

library.push(book1);
library.push(book2);

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
  bookElement.className = 'book';
  bookElement.innerHTML = `
    <p>${book.title} by ${book.author}</p>
    <button id="remove-${book.id}" class="remove">Remove</button>
  `;

  booksSection.appendChild(bookElement);
};

library.forEach((book) => {
  appendBook(book);
  addRemoveListener(book);
});

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;
  const book = new Book(uid(), bookTitle, bookAuthor);
  book.addBook();
  appendBook(book);
  addRemoveListener(book);
});
