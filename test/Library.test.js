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
    expect(library.bookBorrowCount).toBe(1)});

test('Borrow a non-existent book should throw error', () => {
    expect(() => {
        library.borrowBook('000000000');
    }).toThrow('Book with ISBN 000000000 not found.');
});


test('Return a borrowed book to the library', () => {
    const book = new Book('123456789', 'Clean Code', 'Robert C. Martin', 2008);
    library.addBook(book);
    library.borrowBook('123456789');
    library.returnBook('123456789');
    expect(book.IsAvailable()).toBe(true);
});


test('View available books', () => {
    const book1 = new Book('123456789', 'Clean Code', 'Robert C. Martin', 2008);
    const book2 = new Book('987654321', 'test title', 'test Author', 1999);
    library.addBook(book1);
    library.addBook(book2);
    library.borrowBook('123456789');

    const availableBooks = library.viewAvailableBooks();
    expect(availableBooks).toContain(book2);
    expect(availableBooks).not.toContain(book1);
}); 


test(
    'test borrowcount',
    ()=>{
        const boo1 = new Book('123456781', 'Clean Code', 'Robert C. Martin', 2008);
        const boo2 = new Book('123456782', 'Clean Code', 'Robert C. Martin', 2008);
        const boo3 = new Book('123456783', 'Clean Code', 'Robert C. Martin', 2008);
        expect(library.bookBorrowCount).toBeLessThanOrEqual(3);
    }
);