const Book = require('./book');

class Library {
    constructor() {
        this.books = [];
    }

    // Add a new book to the library
    addBook(book) {
        this.books.push(book);
    }

    viewAvailableBooks() {
        return this.books.filter(book => book.isAvailable);
    }
}

module.exports=Library;