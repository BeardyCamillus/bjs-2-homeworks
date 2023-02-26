class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this._state = 100;
        this.type = null;
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
    }

    get state() {
        return this._state;
    }

    set state(state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }

    fix() {
        this.state = this._state * 1.5;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
    }

    type = "magazine";
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
    }

    type = "book";
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
    }

    type = "novel";
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
    }

    type = "fantastic";
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
    }

    type = "detective";
}

class Library {
    books = []

    constructor(name) {
        this.name = name;
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let foundBook = null;
        this.books.forEach(book => { if (book[type] === value) { foundBook = book }; })
        return foundBook;
    }

    giveBookByName(bookName) {
        let foundBook = null;
        this.books.forEach((book, index) => {
            if (book.name === bookName) { foundBook = book };
            this.books.splice(index, 1);
        })
        return foundBook;
    }
}