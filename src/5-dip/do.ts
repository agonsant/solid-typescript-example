/**
 * Entities must depend on abstractions not on concretions. 
 * It states that the high level module must 
 *  - not depend on the low level module, 
 *  - but they should depend on abstractions.
 */

interface DataStorage<T> {
  insert(record: T): void;
}

class MemoryStorage<T> implements DataStorage<T> {
  #storage: T[];

  constructor() {
    this.#storage = [];
  }

  insert(record: T): void {
    this.#storage.push(record);
  }
}

class PostService {
  #db: DataStorage<string>;

  constructor(db: DataStorage<string>) {
    this.#db = db;
  }

  createPost(title: string) {
    this.#db.insert(title);
  }
}

// Ahora ya puedo crear otros tipos de storage y poder realizar test de PostService sin tener que Mock toda una BBDD

export { };

