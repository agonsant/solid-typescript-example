
class MySQLDatabaseConnection {
  store(book: Book) {
    // logic for create 
  }
}

class XMLBookReporter {
  report(book: Book) {
    // logic for report generator in XML of a book
  }
}

/**
 * ¿Que pasa con el testing? --> mock para las dependencias
 * ¿Que pasa si me piden un cambio a la hora de guardar la BBDD?
 * ¿Que pasa si me piden un cambio para los reportes?
 * 
 * ¿Quien me pide los cambios?
 */
class Book {
  #author: string;
  #title: string;
  #database: MySQLDatabaseConnection;
  #reporter: XMLBookReporter;
  constructor(author: string, title: string, database: MySQLDatabaseConnection, reporter: XMLBookReporter) {
    this.#author = author;
    this.#title = title;
    this.#database = database;
    this.#reporter = reporter;
  }

  get author(): string {
    return this.#author;
  }

  get title(): string {
    return this.#title;
  }

  save(): void {
    this.#database.store(this);
  }

  generateReport() {
    this.#reporter.report(this);
  }
}

export { };

