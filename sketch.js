// objects workshop: build a simulation of a 
// real or imagined entity or environment
//experiment with random walks and or particle systems in your sketch
//fork miros workshop task1 
let xPos, yPos, size, i;
let galaxy = [];

function setup() {
createCanvas(400, 400);  
let newStar = createButton("add a star to the galaxy! ✧✧✧");
newStar.mousePressed(createStar);

}

function createStar() {
let sx = random(-100, 100);
let sy = width/2;
let ss = random(10,60);
let addStar = new Star(sx, sy, ss);
galaxy.push(addStar);


}

function draw(){
background(18, 18, 46);
fill (180,9,92);
translate(width/2, height/2);
rotate(frameCount/20);

 

triangle(20,40,60,40,60,80);
noStroke();
triangle(20,120,20,80,60,80);
noStroke();  
triangle(60,120,60,80,100,120);
noStroke();
triangle(60,80,100,40,100,80);
noStroke(); 


triangle(160,40,200,40,200,80);
 noStroke();
triangle(160,80,200,80,160,120);
noStroke();
triangle(200,80,200,120,240,120);
noStroke();
triangle(200,80,240,80,240,40);
noStroke();

//add stars
for (i = 0; i < galaxy.length; i ++) {

galaxy[i].drawStar();
galaxy[i].move();
galaxy[i].shrink();
}
}

class Star {

constructor(x, y, s){
  this.x = x;
  this.y = y;
  this.s = s;
  yPos = 2;
}


move() {

this.y = this.y - yPos;

}

shrink() {
  if (this.s > 0) {
    this.s = this.s - 0.2;
}
}

drawStar(){
noStroke();
fill(random(0, 255), random(0,255), random(0,255));
rect(this.x, this.y, this.s, this.s);
triangle(this.x, this.y, this.x+this.s, this.y, ((this.x+this.s)-this.x)/2 + this.x, this.y-this.s);
triangle(this.x, this.y, this.x, this.y+this.s, this.x-this.s, ((this.y+this.s)-this.y)/2 + this.y);
triangle(this.x+this.s, this.y, this.x+this.s,this.y+this.s, this.x+this.s+this.s, ((this.y+this.s)-this.y)/2 + this.y);
triangle(this.x, this.y+this.s, this.x+this.s,this.y+this.s, ((this.x+this.s)-this.x)/2 + this.x, this.y+this.s+this.s);
}
}