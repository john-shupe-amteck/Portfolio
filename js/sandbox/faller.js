class faller {
  constructor(x, y) {
    this.x = x * grid_square_size;
    this.y = y * grid_square_size;
  }
  
  display() {
    stroke(200);
    rect(this.x, this.y, grid_square_size, grid_square_size)
  }

  update() {
    if (this.y + grid_square_size <= window.innerHeight) {
      this.y += grid_square_size;
    }
    console.log(this.y)
  }
}