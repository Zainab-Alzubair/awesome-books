// Function to generate random id's when called
const uid = () => Date.now().toString(36) + Math.random().toString(36).substr(2);

// Get all relevant elements from the DOM
const booksSection = document.getElementById('library');
const form = document.getElementById('form-id');
const empty = document.getElementById('empty-id');
const listBtn = document.getElementById('list-btn');
const newBtn = document.getElementById('new-btn');
const contactBtn = document.getElementById('contact-btn');
const listSection = document.getElementById('list-id');
const addSection = document.getElementById('add-id');
const contactSection = document.getElementById('contact-id');
const main = document.getElementById('content');
const loader = document.getElementById('load');

// Function to show loading screen
const load = () => {
  main.classList.add('hide');
  loader.classList.remove('hide');
  setTimeout(() => {
    loader.classList.add('hide');
    main.classList.remove('hide');
  }, 1000);
};

// Add event listener to new button to show form
newBtn.addEventListener('click', () => {
  load();

  if (listSection.classList.contains('show')) {
    listSection.classList.replace('show', 'hide');
    listBtn.classList.remove('active');
    addSection.classList.replace('hide', 'show');
    main.style.height = '90vh';
    main.classList.replace('list-back', 'add-back');
    newBtn.classList.add('active');
  } else {
    contactSection.classList.replace('show', 'hide');
    contactBtn.classList.remove('active');
    addSection.classList.replace('hide', 'show');
    main.style.height = '90vh';
    main.classList.replace('contact-back', 'add-back');
    newBtn.classList.add('active');
  }
});

// Add event listener to contact button to show contact-info
contactBtn.addEventListener('click', () => {
  load();

  if (listSection.classList.contains('show')) {
    listSection.classList.replace('show', 'hide');
    listBtn.classList.remove('active');
    contactSection.classList.replace('hide', 'show');
    main.style.height = '90vh';
    main.classList.replace('list-back', 'contact-back');
    contactBtn.classList.add('active');
  } else {
    addSection.classList.replace('show', 'hide');
    newBtn.classList.remove('active');
    contactSection.classList.replace('hide', 'show');
    main.style.height = '90vh';
    main.classList.replace('add-back', 'contact-back');
    contactBtn.classList.add('active');
  }
});

// Add event listener to list button to show library
listBtn.addEventListener('click', () => {
  load();

  if (addSection.classList.contains('show')) {
    addSection.classList.replace('show', 'hide');
    newBtn.classList.remove('active');
    listSection.classList.replace('hide', 'show');
    main.style.height = '';
    main.classList.replace('add-back', 'list-back');
    main.style.paddingBottom = '150px';
    listBtn.classList.add('active');
  } else {
    contactSection.classList.replace('show', 'hide');
    contactBtn.classList.remove('active');
    listSection.classList.replace('hide', 'show');
    main.style.paddingBottom = '150px';
    main.classList.replace('contact-back', 'list-back');
    listBtn.classList.add('active');
  }
});

// Function to show / hide empty library message
function displayEmpty() {
  empty.classList.toggle('hide');
}

// Declare local library array
let library = [];

// Create class declaration for books in library
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

// Function to add click event to remove button remove book from DOM
const addRemoveListener = (book) => {
  document.getElementById(`remove-${book.id}`).addEventListener('click', (e) => {
    e.preventDefault();
    book.removeBook();
    localStorage.setItem('library', JSON.stringify(library));
    if (!library.length) {
      displayEmpty();
    }
    const bookID = document.getElementById(`book-${book.id}`);
    if (bookID.parentNode) {
      bookID.parentNode.removeChild(bookID);
    }
  });
};

// Function to append book to DOM
const appendBook = (book) => {
  const bookElement = document.createElement('div');
  bookElement.id = `book-${book.id}`;
  bookElement.className = 'book';
  bookElement.innerHTML = `
    <p>${book.title} by ${book.author}</p>
    <button id="remove-${book.id}" class="remove"><i class="fa-solid fa-trash-can"></i></button>
  `;

  booksSection.appendChild(bookElement);
  if (library.length === 1) {
    displayEmpty();
  }
};

// Check if local storage exists on page load and use data to add books to DOM
if (localStorage.getItem('library')) {
  const libraryData = JSON.parse(localStorage.getItem('library'));
  libraryData.forEach((book) => {
    const newBook = new Book(book.id, book.title, book.author);
    library.push(newBook);
    appendBook(newBook);
    addRemoveListener(newBook);
  });
}

// Add submit event listener to form to add book to local storage and DOM
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const bookTitle = document.getElementById('title');
  const bookAuthor = document.getElementById('author');
  const book = new Book(uid(), bookTitle.value, bookAuthor.value);
  book.addBook();
  localStorage.setItem('library', JSON.stringify(library));
  appendBook(book);
  addRemoveListener(book);
  localStorage.removeItem('formData');
  bookAuthor.value = '';
  bookTitle.value = '';

  load();
  if (addSection.classList.contains('show')) {
    addSection.classList.replace('show', 'hide');
    newBtn.classList.remove('active');
    listSection.classList.replace('hide', 'show');
    main.style.paddingBottom = '150px';
    listBtn.classList.add('active');
  } else {
    contactSection.classList.replace('show', 'hide');
    contactBtn.classList.remove('active');
    listSection.classList.replace('hide', 'show');
    main.style.paddingBottom = '150px';
    listBtn.classList.add('active');
  }
});
