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
    expect(book.isAvailable()).toBe(false);
});


