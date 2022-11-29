
class Book {
  #author: string;
  #title: string;
  constructor(author: string, title: string) {
    this.#author = author;
    this.#title = title;
  }

  get author(): string {
    return this.#author;
  }

  get title(): string {
    return this.#title;
  }
}

class MySQLDatabaseConnection {
  store(book: Book) {
    // logic for create 
  }
}

interface RepositoryInterface<T> {
  save(entity: T): void;
}

class BookRepository<T extends Book> implements RepositoryInterface<T> {
  #database: MySQLDatabaseConnection;
  constructor(database: MySQLDatabaseConnection) {
    this.#database = database
  }

  save(book: Book): void {
    this.#database.store(book);
  }
}

interface Reporter<T> {
  report(entity: T): void;
}

class XMLBookReporter<T extends Book> implements Reporter<T> {
  report(book: Book) {
    // logic for report generator in XML of a book
  }
}

export { };

