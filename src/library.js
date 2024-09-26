const Book = require('./book');

class Library {
    constructor() {
        this.books = [];
    }

    // Add a new book to the library
    addBook(book) {
        this.books.push(book);
    }

    borrowBook(isbn) {
        const book = this.findBookByIsbn(isbn);
        if (!book) {
            throw new Error(`Book with ISBN ${isbn} not found.`);
        }
        if (!book.isAvailable) {
            throw new Error(`Book with ISBN ${isbn} is already borrowed.`);
        }
        book.setAvailable(false);
    }

    returnBook(isbn) {
        const book = this.findBookByIsbn(isbn);
        if (book) {
            book.setAvailable(true);
        }
    }

    viewAvailableBooks() {
        return this.books.filter(book => book.isAvailable);
    }

    findBookByIsbn(isbn) {
        return this.books.find(book => book.getIsbn() === isbn);
    }
}

module.exports=Library;