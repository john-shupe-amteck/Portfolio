// @ts-check

const cvs = document.querySelector('canvas');
const c = cvs.getContext('2d');

cvs.width = window.innerWidth;
cvs.height = window.innerHeight;

window.addEventListener('resize', function () {
  cvs.width = window.innerWidth;
  cvs.height = window.innerHeight;
});

class Bar {
  constructor(x, width, dx) {
    this.x = x;
    this.y = x + width;
    this.width = width;
    this.dx = dx;
    this.unique = true;

    let colorArray = [
      '#20214150',
      '#244E7850',
      '#5E97B450',
      '#AAAABF50',
      '#DDE8E350'
    ];

    this.color = colorArray[
      Math.floor(Math.random() * colorArray.length)
    ];
  }

  copy = () => {
    barArray.push(new Bar(0-this.width, this.width, this.dx));
    this.unique = false;
  }
  copy1 = () => {
    barArray.push(new Bar(window.innerWidth + 100, this.width, this.dx));
    this.unique = false;
  }


  draw = () => {
    c.beginPath();
    c.moveTo (this.x, 0);
    c.lineTo(
      this.x + this.width,
      0
    );
    c.lineTo(
      this.x - 100 + this.width,
      window.innerHeight      
      );
      c.lineTo(
        this.x  - 100,
      window.innerHeight
    );
    c.lineTo(
      this.x,
      0
    );
    c.closePath();

    c.fillStyle = this.color;
    c.fill();

    this.update();
  };

  update = () => {
    this.x += this.dx;

    if (this.x + this.width > window.innerWidth && this.unique && this.dx > 0) {
      this.copy();
    };

    if (this.x - 100 > window.innerWidth || this.x + this.width < 0) {
      this.dx = 0;
    };

    if (this.x - 100 < 0 && this.unique && this.dx < 0) {
      this.copy1();
    };
  };
}

let barArray = [];

for (let i = 0; i < 20; i++) {
  let width = Math.random() * 200 + 5;
  let x = Math.random() * window.innerWidth;
  let dx = (Math.random() - 0.5) * 2;
  barArray.push(new Bar(x, width, dx));
};

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  barArray.forEach(bar => {
    bar.draw();
  });
};

animate();