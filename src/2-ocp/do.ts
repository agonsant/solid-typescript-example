// Software entities should be open for extension, but closed for modification.

interface Printable {
  print: () => string;
}

class Pdf implements Printable {
  #name: string;
  #size: number;
  constructor(name: string, size: number) {
    this.#name = name;
    this.#size = size;
  }

  print() {
    return this.#name + this.#size;
  }

}
class Png implements Printable {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  print() {
    return this.#name;
  }
}

class ConsolePrinter {
  printFile(file: Printable) { // Ahora usamos la abstracción
    console.log(file.print())
  }

  printFiles(files: Printable[]) {
    files.forEach(file => console.log(file.print()))
  }
}

export { };



