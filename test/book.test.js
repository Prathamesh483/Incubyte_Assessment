const Book = require('../src/Book');

test('Create a new book', () => {
    const book = new Book('123456789', 'Clean Code', 'Robert C. Martin', 2008);
    expect(book.getIsbn()).toBe('123456789');
    expect(book.getTitle()).toBe('Clean Code');
    expect(book.getAuthor()).toBe('Robert C. Martin');
    expect(book.getPublicationYear()).toBe(2008);
    expect(book.isAvailable()).toBe(true);
});