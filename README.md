# Workshop-1

## Workshop 1: 14/1/25
Began watching the video and I rewatched the beginning because I was very interested in the move function Leo used. This helped me because I was trying to figure out how to make a block come back after reaching the edge of the canvas. I’m glad I now know how to use this tool.

<img width="1046" alt="Screenshot 2025-01-14 at 5 01 56 PM" src="https://github.com/user-attachments/assets/9c4d0273-fd57-480f-81e4-3089987de38c" />
This is my block that bounced from wall to wall. I also made it so it stopped and looked like it was bouncing on the right wall by making it stop it’s own width before the canvas width so it appeared like it was bouncing off of it. This is super fun and I’m going to experiment to see if I can do the same thing vertically. And Ideally, I would be able to make a pong game out of rectangles (or even triangles if I felt so compelled to do so).

## Workshop 1: Loops
Also learning how to use the loops ‘while’ and ‘for’, as well as writing x=x+50 as x+=50 because that’s a shortcut.
The ‘while’ enables a restriction within making something happen. In his example, Leo made it possible for duplicated rectangles to be made within the canvas. This means that you don’t have to individually generate shapes onto the canvas which keeps your code tidy and short.  This is how the ‘while’ function is written out:

 while (x < width){
rect(x, 200, 25, 80);
x += 50;
}

The ‘for’ function also helps keep code tidy and allows for you to use three key elements when generating shapes, the variable (x=0), the exit condition (x<width), and the incrementation (x+=50).
Leo says that this will be the loop that we will use the most often because it is the most compact/shortest to type, as well as being super useful for generating shapes and objects to fill in/be contain within a certain space on the canvas. 
It is written like this:
for (x = 0; x < width; x += 50){
rect(x, 200, 25, 80)
}

### Functions: codes you name that have specific qualities/purposes
Defining and calling functions, function draw() and function setup() are two functions that exist in p5.js. Inside the brackets you can adjust parameters and arguments into the function.
The curly brackets {} exist to house the code the function will execute when it gets called.  
x ++ is a shorthand meaning x=x+1

### What does it mean to define and call your functions?
- Modularity and reusability
- To keep lines of code tidy/easy to navigate
- Ability to call a function again rather than try to make it again
- Variables(use anywhere) vs Function Variables (usable within a function)
- Making multiples parameters means more things that can be adjusted on the thing you have created e.g. height, width, length, colour

### Leo’s example of creating a function on the right:
function draw() {
background (220);

makeHouse (50, 200,
30, color (255, 0, 0));
makeHouse (150, 200, 150, color (255,
255, 0));
makeHouse (250,
200,
makeHouse (350,
200,
50, color(40, 100, 200));
20, color (200, 100,
makeHouse (450,
200, 100, color(30, 200,
90));
80))

}

function makeHouse(xPos, yPos, stories, colour) {
fill(colour);
noStroke();
rect(xPos, yPos, 50, stories);
triangle(xPos, yPos, xPos + 25, yPos - 20, xPos + 50, yPos);

};

Which made a bunch of houses and enables their parameters to be changed. Thus Leo has created his houses and now they are an object rather than being a rectangle and a triangle. This means that far more detailed things can be made.

## Work made after Workshop 1
random(0,width), means that a number will be randomly selected for a function which Leo explained which I thought was cool.
Here are my attempts to use it with a function.

I am struggling to use p5.js and generating my Flowers, I will contact Leo because I don't understand what I'm doing wrong and it's making me mad.
I asked Sienna for some help as well as rewatching the class viideo again and looking into some resources

https://p5js.org/reference/p5/random/ - p5.js guide
https://youtu.be/c3TeLi6Ns1E?feature=shared - The Coding Train lesson on Youtube

<img width="1288" alt="Screenshot 2025-01-18 at 3 18 45 PM" src="https://github.com/user-attachments/assets/cdcbd60c-48fe-4d26-844c-0ab22734090b" />
This is what I have gotten done so far but I will be moving onto the next workshop to try get my mind on something else.


