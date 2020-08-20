const grid_square_size = 100; // in pixels
const columns = Math.floor(window.innerWidth/grid_square_size + 1);
const rows = Math.floor(window.innerHeight/grid_square_size + 1)
var i = 0;
let p;
let mem;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  p = new faller(1, 1);
  frameRate(5);
  mem = new Memory();
  mem.fillUp();
  noLoop();
}

function draw() {
  background(0);
  grid();
  p.display();
  p.update();
  mem.show();
}

function grid() {
  for (i = 1; i < columns; i++) {
    stroke(100);
    line(i * grid_square_size, 0, i * grid_square_size, window.innerHeight);
  }
  for (i = 1; i < rows; i++) {
    stroke(100);
    line(0, i * grid_square_size, window.innerWidth, i * grid_square_size);
  }
}