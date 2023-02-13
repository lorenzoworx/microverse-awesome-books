const books = [];

function addBook(title, author) {
  books.push({ id: books.length, title, author });
  showBooks();
}

function removeBook(bookId) {
  const bookIndex = books.findIndex((book) => book && book.id == bookId);
  delete books[bookIndex];
  showBooks();
}

function showBooks() {
  let booksHTML = '';
  books.forEach((book) => {
    booksHTML += `
      <div class="book">
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <button onClick="removeBook(${book.id})">Remove</button>
      </div>
    `;
  });
  const booksContainer = document.querySelector('#books_container');
  booksContainer.innerHTML = booksHTML;
}

showBooks();

document.querySelector('#add_new_book_btn').addEventListener('click', (e) => {
  e.preventDefault();
  const addBookForm = document.forms['add_book_form'];
  const bookTitle = addBookForm.elements.bookTitleInput.value;
  const bookAuthor = addBookForm.elements.bookAuthorInput.value;
  addBook(bookTitle, bookAuthor);
  addBookForm.reset();
});
