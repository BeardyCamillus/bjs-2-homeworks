class PrintEditionItem {
    state = 100;
    type = null;

    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
    }

    get state() {
        return this.state;
    }

    set state(state) {
        this.state = state
    }

    fix() {
        let newState = this.state * 1.5;
        if (newState < 0) {
            this.state = 0;
        } else if (newState > 100) {
            this.state = 100;
        } else {
            this.state = newState;
        }
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