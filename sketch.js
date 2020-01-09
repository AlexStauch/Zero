var frames = 0;

function setup() {
  createCanvas(1262, 600);
  background(108, 111, 101);
  noCursor();
}

function draw() {
 	frames++

 	stroke((frames%108), (frames%111), (frames%101));
 	strokeWeight((frames*2)%20);
 	fill(0);
	ellipse(mouseX, mouseY, 200, 200);
}