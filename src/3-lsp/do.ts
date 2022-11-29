// Software entities should be open for extension, but closed for modification.

class Rectangle {
  #width: number;
  #height: number;
  constructor(width: number, height: number) {
    this.#width = width;
    this.#height = height;
  }

  getArea() {
    return this.#width * this.#height;
  }
}

class Square extends Rectangle {
  constructor(size: number) {
    super(size, size);
  }
}

function renderLargeRectangles(rectangles: Rectangle[]) {
  rectangles.forEach((rectangle) => rectangle.getArea());
}

const rectangles = [new Rectangle(4, 5), new Rectangle(4, 5), new Square(4)];
renderLargeRectangles(rectangles);

export { };
