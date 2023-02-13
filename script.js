const books = [
  {
    title: 'Hello',
    author: 'Precious'
  },
  {
    title: 'Hello',
    author: 'Precious'
  },
  {
    title: 'Hello',
    author: 'Precious'
  },
];

function addBook(title, author) {
  books.push({ id: books.length, title, author });
}

function removeBook(bookId) {
  const bookIndex = books.findIndex((book) => book && book.id == bookId);
  delete books[bookIndex];
}

function showBooks() {
  let booksHTML = '';
  books.forEach((book) => {
    booksHTML += `
      <div class="book">
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <button>Remove</button>
      </div>
    `;
  });
  const booksContainer = document.querySelector('#books_container');
  booksContainer.innerHTML = booksHTML;
}

showBooks();
