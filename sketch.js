var frames;

function setup(){
	var cnv = createCanvas(windowWidth, windowHeight);
	cnv.style('display', 'block');
	background(0);
}

function windowResized(){
	createCanvas(windowWidth, windowHeight);
}

function draw(){
 frames++;
 var frames = frames%100

  for(var i = 0; i < 100; i++){
	stroke(.85 * i, 2.45*i, 2.15* i);
	strokeCap(PROJECT);
	strokeWeight(5);
	line(width/2.05, height/2.5, 20*i, 20*i);
	line(width/1.95, height/1.5, width - (20*i), height - (20*i));
	curve(0 , 0, 0 - (i*20), i*20, i*20, (i*20), width, height);
	curve(width, height, width - (20*i), height - (20*i), (width- (20*i)) * 2, (height - (20*i)) * 2, width/1.95, 0);
	noFill();
  }

  applyMatrix();
  fill(215, 240, 215);
  triangle(width/3.7, 0, width/2.62, height/2.5, width/1.95, height/1.5);
  triangle(width/2.05, height/2.5, width/1.61, height/1.5, width/1.4, height);
  resetMatrix();
  
}