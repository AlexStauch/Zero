var frames = 0;

function setup() {
  createCanvas(1262, 600);
  background(108, 111, 101);
}

function draw() {
 	stroke(108, 111, 101);
 	strokeWeight(15);
 	fill(0);
	ellipse(mouseX, mouseY, 200, 200);
}