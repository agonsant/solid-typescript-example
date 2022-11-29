class Rectangle {
  protected width: number;
  protected height: number;
  constructor() {
    this.width = 0;
    this.height = 0;
  }

  setWidth(width: number) {
    this.width = width;
  }

  setHeight(height: number) {
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  setWidth(width: number) {
    this.width = width;
    this.height = width;
  }

  setHeight(height: number) {
    this.width = height;
    this.height = height;
  }
}

function renderLargeRectangles(rectangles: Rectangle[]) {
  rectangles.forEach((rectangle) => {
    rectangle.setWidth(4);
    rectangle.setHeight(5);
    rectangle.getArea();
  });
}

const rectangles = [new Rectangle(), new Rectangle(), new Square()]; // 20, 20, 25
renderLargeRectangles(rectangles);

export { };
