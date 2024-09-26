const Library = require('../src/library');
const Book = require('../src/book');

let library;

beforeEach(() => {
    library = new Library();
});

test('Add a book to the library', () => {
    const book = new Book('123456789', 'Clean Code', 'Robert C. Martin', 2008);
    library.addBook(book);
    expect(library.viewAvailableBooks()).toContain(book);
});


test('Borrow a book from the library', () => {
    const book = new Book('123456789', 'Clean Code', 'Robert C. Martin', 2008);
    library.addBook(book);
    library.borrowBook('123456789');
    expect(book.IsAvailable()).toBe(false);
});

test('Borrow a non-existent book should throw error', () => {
    expect(() => {
        library.borrowBook('000000000');
    }).toThrow('Book with ISBN 000000000 not found.');
});
