let balls = []

function setup() {
  var width = displayWidth;
  var height = displayHeight;
  createCanvas(width, height);
  cursor(HAND);
}

class Ball {
  constructor(mass, x, y) {
    this.mass = (Math.random() * 50);
    this.x = Math.random() * width;
    this.y = -50;
    var mousedir = mouseX - width / 2;

  }
}

function tick(ball) {
  ball.y += (ball.mass* 0.1);
  ball.x -= (wind * ball.mass * 0.001);
  strokeWeight(0);
  fill(256, ball.y / 5);

  if (ball.y <= height * 1.5){
    ellipse(ball.x, ball.y, ball.mass, ball.mass)
  }
  else {
    delete balls[balls.indexOf(ball)];
  }
  
}

function keyPressed() {
  balls = []
}

function draw() {
  background(0, 0, 50);

  var mousedir = mouseX - width / 2;  
  wind = ((Math.random() * 20) - mousedir);

  ball = new Ball();
  balls.push(ball);
  balls.forEach(tick);

}
