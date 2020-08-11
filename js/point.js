class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.n = x + 1 * y + 1 * Math.random() * 100;
  }

  update() {
    this.n += .003;
  }

  display() {
    fill(255);
    ellipse((this.x * spacing_x) + (noise(this.n) * spacing_x), (this.y * spacing_y) + (noise(this.n + 1) * spacing_y), 5, 5);
  }

  x_coord() {
    return (this.x * spacing_x) + (noise(this.n) * spacing_x);
  }

  y_coord() {
    return (this.y * spacing_y) + (noise(this.n + 1) * spacing_y);
  }
}