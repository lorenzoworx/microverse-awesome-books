let books = [];

function showBooks() {
  let booksHTML = '';
  books.forEach((book) => {
    booksHTML += `
      <div class='book'>
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <button onClick='removeBook(${book.id})'>Remove</button>
      </div>
    `;
  });
  const booksContainer = document.querySelector('#books_container');
  booksContainer.innerHTML = booksHTML;
}

function addBook(title, author) {
  books.push({ id: books.length, title, author });
  localStorage.setItem('books', JSON.stringify(books));
  showBooks();
}

// eslint-disable-next-line
function removeBook(bookId) {
  const bookIndex = books.findIndex((book) => book && book.id === bookId);
  books.splice(bookIndex, 1);
  localStorage.setItem('books', JSON.stringify(books));
  showBooks();
}

books = JSON.parse(localStorage.getItem('books')) || [];
showBooks();

document
  .querySelector('#add_new_book_btn')
  .addEventListener('click', (event) => {
    event.preventDefault();
    const addBookForm = document.forms.add_book_form;
    const bookTitle = addBookForm.elements.bookTitleInput.value;
    const bookAuthor = addBookForm.elements.bookAuthorInput.value;
    addBook(bookTitle, bookAuthor);
    addBookForm.reset();
  });
