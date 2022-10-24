const uid = () => Date.now().toString(36) + Math.random().toString(36).substr(2);

const booksSection = document.getElementById('books');
const addBtn = document.getElementById('add-btn');

let books = [
  {
    id: uid(),
    title: 'Lorem ipsum',
    author: 'Testeroo Testyy',
  },
  {
    id: uid(),
    title: 'Second book',
    author: 'Testeroo Testyy',
  },

];

const addBook = (id, title, author) => {
  const book = {
    id,
    title,
    author,
  };

  books.push(book);
  return book;
};

const removeBook = (id) => {
  books = books.filter((book) => book.id !== id);
};

const addRemoveListener = (id) => {
  document.getElementById(`remove-${id}`).addEventListener('click', (e) => {
    e.preventDefault();
    removeBook(id);
    const bookID = document.getElementById(`book-${id}`);
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

books.forEach((book) => {
  appendBook(book);
  addRemoveListener(book.id);
});

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;
  const newBook = addBook(uid(), bookTitle, bookAuthor);
  appendBook(newBook);
  addRemoveListener(newBook.id);
});
