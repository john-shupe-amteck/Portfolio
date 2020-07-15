let ball;

function setup() {
    createCanvas(400, 400);
    ball = new Ball();
}

function draw() {
    background(220);
    ball.move();
    ball.bounce();
    ball.display();
}