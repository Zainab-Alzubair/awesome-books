let books = [
  {
    id: 0,
    title: 'Lorem ipsum',
    author: 'Testeroo Testyy',
  },
  {
    id: 1,
    title: 'Second book',
    author: 'Testeroo Testyy',
  },

];

const addBook = (title, author) => {
  const book = {
    title,
    author,
  };

  books.push(book);
  return book;
};

const removeBook = (id) => {
  books = books.filter((book) => book.id !== id);
};

const booksSection = document.getElementById('books');

books.forEach((book) => {
  const bookElement = document.createElement('div');
  bookElement.id = `book-${book.id}`;
  bookElement.innerHTML = `
    <p>${book.title}</p>
    <p>${book.author}</p>
    <button class="remove">Remove</button>
    <hr>
  `;

  booksSection.appendChild(bookElement);
});

const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;
  const newBook = addBook(bookTitle, bookAuthor);
  const bookElement = document.createElement('div');
  bookElement.innerHTML = `
    <p>${newBook.title}</p>
    <p>${newBook.author}</p>
    <button class="remove">Remove</button>
    <hr>
  `;

  booksSection.appendChild(bookElement);
});

const removeButtons = document.getElementsByClassName('remove');
for (let i = 0; i < removeButtons.length; i += 1) {
  removeButtons[i].addEventListener('click', (e) => {
    e.preventDefault();
    removeBook(i);
    const bookID = document.getElementById(`book-${i}`);
    if (bookID.parentNode) {
      bookID.parentNode.removeChild(bookID);
    }
  });
}
