const books = [];

function addBook(title, author) {
  books.push({ id: books.length, title, author });
}

function removeBook(bookId) {
  const bookIndex = books.findIndex((book) => book && book.id == bookId);
  delete books[bookIndex];
}
