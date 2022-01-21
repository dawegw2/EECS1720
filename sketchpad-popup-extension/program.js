//simple sketch pad popup extension 

let button;
let lineSize = 1;

function setup() {
    createCanvas(500, 500);
    background(255);
    button = createButton('clear');
    button.position(10, 10);
    button.size(75, 25);
    button.mousePressed(clearSketch);

    let inpSize = createInput ('');
    inpSize.position(100, 10);
    inpSize.size(75, 15);
    inpSize.input(changeStrokeSize);

    textAlign(CENTER);
}

function draw() {
    fill(0);
    text('Enter a number to change the line Size in pixels)', 310, 10);
    if (mouseIsPressed) {
      fill(0);
      strokeWeight(lineSize);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
}

function clearSketch() {
    background(255);
}

function changeStrokeSize() {
    lineSize = this.value();

}

