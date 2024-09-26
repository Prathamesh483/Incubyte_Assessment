class Book{
    constructor (isbn, title, author, publicationYear){
        this.isbn=isbn;
        this.title=title;
        this.author=author;
        this.publicationYear=publicationYear;
        this.isAvailable = true;
    }

    getIsbn(){
        return this.isbn;
    }
    getTitle(){ 
        return this.title;
    }
    getAuthor(){ 
        return this.author; 
    }
    getPublicationYear(){ 
        return this.publicationYear; 
    }
    IsAvailable(){ 
        return this.isAvailable;
    }
    setAvailable(available){ 
        this.isAvailable = available;
    }


}

module.exports =Book;