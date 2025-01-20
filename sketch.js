let x = 20
let y = 20

function setup() {
  createCanvas(400, 400); 
  background(0,210,20);
  for (x = 0; x <5; x++) {
    flower(random(20, 350), random (20, 375), random(0, 10) );
  }
}

function draw(){  
}

function flower (x,y,size){
  fill(210,10,130)
  noStroke();
  triangle(x,y+20,x+40,y+20,x+40,y+60)
  noStroke();
  triangle(x,y+100,x,y+60,x+40,y+60)
  noStroke();  
  triangle(x+40,y+100,x+40,y+60,100,y+100)
  noStroke();
  triangle(x+40,y+60,x+80,y+20,x+80,y+60)
  noStroke();
}
