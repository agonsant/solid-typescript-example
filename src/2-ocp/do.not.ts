class Pdf {
  #name: string;
  #size: number;
  constructor(name: string, size: number) {
    this.#name = name;
    this.#size = size;
  }

  get name() {
    return this.#name;
  }

  get size() {
    return this.#size;
  }


}
class Png {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }
}


class ConsolePrinter {
  printFile(file: any) { // Ojo el any
    if (file instanceof Pdf) {
      // Print Pdf... file.name + file.size
      console.log(file.name + file.size);
    } else if (file instanceof Png) {
      // Print Png... file.name
      console.log(file.name)
    }
  }

  printFiles(files: any[]) {
    files.forEach(file => {
      if (file instanceof Pdf) {
        // Print Pdf... file.name + file.size
        console.log(file.name + file.size);
      } else if (file instanceof Png) {
        // Print Png... file.name
        console.log(file.name)
      }
    })
  }
}

export { };
