let grid_size = 20;
let spacing_x = window.innerWidth / grid_size;
let spacing_y = window.innerHeight / grid_size;

let dots = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  let index = 0;
  for (let y = 0; y < grid_size; y++) {
    for (let x = 0; x < grid_size; x++) {
      dots[index++] = new Point(x, y);
    }
  }
}

function draw() {
  background("rgb(10, 0, 40)");

  for (let i = 0; i < dots.length; i++) {
    dots[i].display();
    dots[i].update();
  }

  connect_dots();
}

function connect_dots() {
  for (let i = 0; i <= grid_size; i++) {
    stroke(255);
    noFill();
    beginShape();
    for (let x = i; x < grid_size * grid_size; x += grid_size) {
      vertex(dots[x].x_coord(), dots[x].y_coord())
    }
    endShape();
  }

  for (let i = 0; i < grid_size * (grid_size); i += grid_size) {
    stroke(255);
    noFill();
    beginShape();
    for (let x = 0; x < grid_size; x++) {
      let y = i + x;
      vertex(dots[y].x_coord(), dots[y].y_coord())
    }
    endShape();
  }

  for (let x = 0; x < grid_size - 1; x++) {
    for (let i = 0; i < grid_size - 1; i++) {
      let q = x * grid_size + i;
      fill(100);
      beginShape();
      vertex(dots[q].x_coord(), dots[q].y_coord());
      vertex(dots[(grid_size + q)].x_coord(), dots[grid_size + q].y_coord());
      vertex(dots[(grid_size + q + 1)].x_coord(), dots[grid_size + q + 1].y_coord());
      vertex(dots[q + 1].x_coord(), dots[q + 1].y_coord());
      endShape(CLOSE);    
    }
  }
}