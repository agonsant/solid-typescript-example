class MemoryStorage<T> {
  #storage: T[];

  constructor() {
    this.#storage = [];
  }

  insert(record: T): void {
    this.#storage.push(record);
  }
}

class PostService {
  #storage = new MemoryStorage();

  createPost(title: string) {
    this.#storage.insert(title);
  }
}

export { };
