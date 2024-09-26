// src/Main.js

const Library = require('./library');
const Book = require('./look');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const library = new Library();

function mainMenu() {
    console.log("\n1. Add Book");
    console.log("2. Borrow Book");
    console.log("3. Return Book");
    console.log("4. View Available Books");
    console.log("5. Exit");
    rl.question("Choose an option: ", (choice) => {
        switch (choice) {
            case '1':
                addBook();
                break;
            case '2':
                borrowBook();
                break;
            case '3':
                returnBook();
                break;
            case '4':
                viewAvailableBooks();
                break;
            case '5':
                rl.close();
                break;
            default:
                console.log("Invalid choice. Try again.");
                mainMenu();
        }
    });
}

function addBook() {
    rl.question("Enter ISBN: ", (isbn) => {
        rl.question("Enter Title: ", (title) => {
            rl.question("Enter Author: ", (author) => {
                rl.question("Enter Publication Year: ", (year) => {
                    const book = new Book(isbn, title, author, parseInt(year));
                    library.addBook(book);
                    console.log(`Book "${title}" added.`);
                    mainMenu();
                });
            });
        });
    });
}

function borrowBook() {
    rl.question("Enter ISBN to borrow: ", (isbn) => {
        try {
            library.borrowBook(isbn);
            console.log(`Book with ISBN ${isbn} borrowed.`);
        } catch (error) {
            console.log(error.message);
        }
        mainMenu();
    });
}

function returnBook() {
    rl.question("Enter ISBN to return: ", (isbn) => {
        library.returnBook(isbn);
        console.log(`Book with ISBN ${isbn} returned.`);
        mainMenu();
    });
}

function viewAvailableBooks() {
    const availableBooks = library.viewAvailableBooks();
    if (availableBooks.length > 0) {
        console.log("\nAvailable Books:");
        availableBooks.forEach(book => {
            console.log(`${book.getTitle()} by ${book.getAuthor()}`);
        });
    } else {
        console.log("No books available.");
    }
    mainMenu();
}

mainMenu();
