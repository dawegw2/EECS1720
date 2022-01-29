var w;
var r = 0;
var maxDim = 100;
var dim = 0;

function setup() {
  createCanvas(640, 360);
  
  rectMode(CENTER);
  // Make a Walker object
  w = new Walker();
}

function draw() {
  background(51);
  // Update and display object
  r += 5;
  w.update();
  w.display();
}

function Walker() {

  // Start Walker in center
  this.pos = createVector(width / 2, height / 2);

  this.update = function() {
    // Move Walker randomly
    var vel = createVector(random(-10, 10), random(-10, 10));
    this.pos.add(vel);
  }

  this.display = function() {     
    if (this.pos.x > width || this.pos.x < 0) {
      background(200, 127, 127);
    }  
    if (this.pos.y > height || this.pos.y < 0) {
      background(127, 127, 200);
    }  
    
    // Draw Walker as circle
    let b = map(mouseX, 0, width, 50, 150);
    let g = map(mouseY, 0, height, 50, 200);
    fill(200, g, b);
    translate(this.pos.x, this.pos.y);
    rotate(radians(r));
    
    if (dim < maxDim && !mouseIsPressed) {
      dim += 5;
    } else {
      dim -= 1;
    }
    rect(0, 0, dim, dim, 20);
  }
}