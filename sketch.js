function setup() {
  createCanvas(400, 400);  

 }

// let x = 20

 function draw(){
   background(110,200,110);
   fill (180,9,92);
     for (let angle=0; angle <= 10; angle += 87) {
         push();                       
         translate(width/2, height/2);
         rotate(angle);
         pop();                        
  }
   
     translate(width/2, height/2);
     rotate(frameCount/8);
 
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
  
}

 // function draw()
{
//    background(110,200,110);
//    fill (180,9,92);

//  triangle(20,40,60,40,60,80);
//  noStroke();
//  triangle(20,120,20,80,60,80);
//  noStroke();  
//  triangle(60,120,60,80,100,120);
//  noStroke();
//  triangle(60,80,100,40,100,80);
//  noStroke(); 

  
//  triangle(160,40,200,40,200,80);
//    noStroke();
//   triangle(160,80,200,80,160,120);
//   noStroke();
//   triangle(200,80,200,120,240,120);
//   noStroke();
//   triangle(200,80,240,80,240,40);
//   noStroke();
  
}