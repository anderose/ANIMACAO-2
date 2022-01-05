var yoff = 50.0;


var min_radius = 1;
var max_radius = 500;


var angle_incr = 1;


var max_noise = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  
  
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  
  
  noiseDetail(10, 0.8);
  
  noFill();
  
  for (let radius = min_radius; radius < max_radius; radius += 5) {
    
    let alpha = map(radius, min_radius, max_radius, 255, 50);
    stroke(255, alpha);
    
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle_incr) {
     
      let xoff = cos(a) + 1;
      let offset = map(noise(xoff, sin(a) + 1 + yoff), 0, 1, -max_noise, max_noise);
      
      
      let r = frameCount + radius + frameCount + (offset * map(radius, min_radius, max_radius, 0.1, 1));
      let x = r * cos(a);
      let y = r * sin(a);
      
      
      curveVertex(x,y);
    }
    endShape(CLOSE);
    
    yoff += 0.08;
  }
  
 
  
}