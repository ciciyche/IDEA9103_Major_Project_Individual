class Rectangle {
  constructor(x, y, width, height, r, g, b) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color(r, g, b);
  }

  // Calculate the area of the rectangle
  area() {
    return this.width * this.height;
  }

  // Calculate the perimeter of the rectangle
  perimeter() {
    return 2 * (this.width + this.height);
  }

  // Display the rectangle
  display() {
    fill(this.color);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
  }
}

class Car {
  // A car is composed of several rectangles
  constructor(rectangles) {
    this.rectangles = rectangles;
  }

  // Display all rectangles that make up the car
  display() {
    for (let rectangle of this.rectangles) {
      rectangle.display();
    }
  }
}

class YellowBlock {
  constructor(x, y, w, h, r, g, b) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color(r, g, b);
  }

  // Display the yellow block
  display() {
    fill(this.color);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
  }
}

class SmallBlock {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
  }

  // Display the small block
  display() {
    fill(this.color);
    noStroke();
    rect(this.x, this.y, this.size, this.size);
  }
}

const SMALL_BLOCK_SIZE = 12;
const SMALL_BLOCK_COLORS = [
  '#385799', // blue
  '#B23D2F', // red
  '#D5D5CB'  // white/gray
];

let yellowBlocks = [];
let smallBlocks = [];
let cars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  createCars();
  createYellowBlocks();
}

function draw() {
  background(242, 243, 239);

  // Display all cars
  for (let car of cars) {
    car.display();
  }

  // Display all yellow blocks
  for (let block of yellowBlocks) {
    block.display();
  }

  // Display all small blocks
  for (let block of smallBlocks) {
    block.display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  createCars();
  createYellowBlocks();
}

function createYellowBlocks() {
  yellowBlocks = [];
  smallBlocks = [];
  let scaleFactor = min(windowWidth / 715, windowHeight / 715);

  let horizontalLines = [
    { y: 15, w: 715, h: 15 },
    { y: 115, w: 715, h: 15 },
    { y: 250, w: 715, h: 15 },
    { y: 310, w: 715, h: 15 },
    { y: 405, w: 715, h: 15 },
    { y: 445, w: 715, h: 15 },
    { y: 485, w: 55, h: 15 },
    { y: 515, w: 360, h: 15 },
    { y: 555, w: 55, h: 15 },
    { y: 615, w: 715, h: 15 },
    { y: 635, w: 55, h: 15 },
    { y: 675, w: 715, h: 15 },
    { y: 580, w: 85, h: 15, x: 615 }
  ];

  for (let line of horizontalLines) {
    let yellowBlock = new YellowBlock((line.x || 0) * scaleFactor, line.y * scaleFactor, line.w * scaleFactor, line.h * scaleFactor, 232, 210, 39);
    yellowBlocks.push(yellowBlock);
    createSmallBlocks(yellowBlock, 'horizontal');
  }

  let verticalLines = [
    { x: 15, h: 265 },
    { x: 40, h: 715 },
    { x: 80, h: 690 },
    { x: 155, h: 715 },
    { x: 385, h: 715 },
    { x: 410, h: 260 },
    { x: 410, y: 315, h: 400 },
    { x: 460, y: 325, h: 135 },
    { x: 615, h: 715 },
    { x: 640, h: 260 },
    { x: 665, h: 85 },
    { x: 665, y: 115, h: 200 },
    { x: 665, y: 460, h: 130 },
    { x: 690, h: 715 }
  ];

  for (let line of verticalLines) {
    let yellowBlock = new YellowBlock(line.x * scaleFactor, (line.y || 0) * scaleFactor, 15 * scaleFactor, line.h * scaleFactor, 232, 210, 39);
    yellowBlocks.push(yellowBlock);
    createSmallBlocks(yellowBlock, 'vertical');
  }

  let additionalBlocks = [
    { x: 85, y: 45, w: 75, h: 25 },
    { x: 85, y: 185, w: 75, h: 50 },
    { x: 110, y: 250, w: 30, h: 60 },
    { x: 85, y: 555, w: 80, h: 60 },
    { x: 200, y: 325, w: 50, h: 15 },
    { x: 615, y: 350, w: 80, h: 35 },
    { x: 615, y: 520, w: 80, h: 30 }
  ];

  for (let block of additionalBlocks) {
    let yellowBlock = new YellowBlock(block.x * scaleFactor, block.y * scaleFactor, block.w * scaleFactor, block.h * scaleFactor, 232, 210, 39);
    yellowBlocks.push(yellowBlock);
  }
}

function createSmallBlocks(yellowBlock, type) {
  let numberOfSmallBlocks = int(random(5, 10)); // Increase the random number of small blocks per yellow line
  let placedBlocks = [];
  let scaleFactor = min(windowWidth / 715, windowHeight / 715);


  for (let i = 0; i < numberOfSmallBlocks; i++) {
    let x, y;
    let attempts = 0;
    let maxAttempts = 100; // Max attempts to avoid infinite loops

    // Attempt to place the small block without overlapping
    do {
      if (type === 'horizontal') {
        x = random(yellowBlock.x, yellowBlock.x + yellowBlock.w - SMALL_BLOCK_SIZE * scaleFactor);
        y = yellowBlock.y + (yellowBlock.h - SMALL_BLOCK_SIZE * scaleFactor) / 2;
      } else if (type === 'vertical') {
        x = yellowBlock.x + (yellowBlock.w - SMALL_BLOCK_SIZE * scaleFactor) / 2;
        y = random(yellowBlock.y, yellowBlock.y + yellowBlock.h - SMALL_BLOCK_SIZE * scaleFactor);
      }

      var overlapping = false;
      for (let block of placedBlocks) {
        if (dist(x, y, block.x, block.y) < SMALL_BLOCK_SIZE * scaleFactor + 10) {
          overlapping = true;
          break;
        }
      }
      attempts++;
    } while (overlapping && (attempts < maxAttempts));

    // If no overlap, add the small block
    if (!overlapping) {
      let blockColor = color(random(SMALL_BLOCK_COLORS));
      let smallBlock = new SmallBlock(x, y, SMALL_BLOCK_SIZE * scaleFactor, blockColor);
      smallBlocks.push(smallBlock);
      placedBlocks.push({ x: x, y: y });
    }
  }
}

function createCars() {
  cars = [];
  let scaleFactor = min(windowWidth / 715, windowHeight / 715);

  let carData = [
    [
      { x: 470, y: 130, w: 70, h: 120, r: 66, g: 103, b: 185 },
      { x: 470, y: 170, w: 70, h: 55, r: 177, g: 61, b: 48 },
      { x: 490, y: 187, w: 33, h: 25, r: 225, g: 195, b: 11 }
    ],
    [
      { x: 185, y: 30, w: 55, h: 85, r: 178, g: 61, b: 46 },
      { x: 198, y: 50, w: 28, h: 26, r: 216, g: 216, b: 212 },
      { x: 185, y: 95, w: 55, h: 20, r: 216, g: 216, b: 212 }
    ],
    [
      { x: 201, y: 325, w: 55, h: 80, r: 227, g: 203, b: 24 },
      { x: 201, y: 345, w: 55, h: 60, r: 66, g: 103, b: 185 },
      { x: 211, y: 363, w: 34, h: 28, r: 227, g: 203, b: 24 }
    ],
    [
      { x: 495, y: 325, w: 75, h: 120, r: 178, g: 61, b: 46 },
      { x: 495, y: 429, w: 75, h: 17, r: 216, g: 216, b: 212 },
      { x: 512, y: 350, w: 42, h: 32, r: 216, g: 216, b: 212 }
    ],
    [
      { x: 290, y: 265, w: 50, h: 145, r: 232, g: 210, b: 39 },
      { x: 290, y: 340, w: 50, h: 35, r: 216, g: 216, b: 212 }
    ]
  ];

  // Create cars from car data
  for (let carRects of carData) {
    let rectangles = carRects.map(rect => new Rectangle(rect.x * scaleFactor, rect.y * scaleFactor, rect.w * scaleFactor, rect.h * scaleFactor, rect.r, rect.g, rect.b));
    cars.push(new Car(rectangles));
  }
}
