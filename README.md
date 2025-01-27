# Workshop 7
I decided to do the open source workshop task using miros task 1 work - which involved a rotating 'flower' pattern. 
the URL for this workshop is: 

## Initial Idea
I was intrrigued by the rotation system, so my idea was to create a swirling galaxy of stars where each star was a class object - and having multiple create a galaxy. 

## Creating the Object
![Screenshot 2025-01-27 180108](https://github.com/user-attachments/assets/a9895741-5b6c-49ec-944c-dc6828f4c042)

First I followed the workshop video to roughly create a basic environment or a 'star' that I could develop further. 
The co-ordinates of the stars were all variable based so I could introduced randomness later in the code, and this required just a bit of thinking and simple mathematics to do. 

## Movement
I wanted the stars to move, and initially I had them simply bouncing off the walls. I simulated this with two stars, not creating a system yet to ensure that it worked. 
![Screenshot 2025-01-27 182136](https://github.com/user-attachments/assets/18a83472-170d-4489-90db-0942369859b9)

the following code bounced the stars off the walls when they reached the 'edge' of the canvas
![Screenshot 2025-01-27 182142](https://github.com/user-attachments/assets/11559fd0-c11f-43be-af8f-5fdb631cf52a)

### System Generation
I wanted the stars to be added one by one, so the choices were an interval or button. Since the nature of the movement was quite repetitive, I thought user generation would increase the 'randomness' factor that simulated a real galaxy so I added a button which added another star into a galaxy array system everytime it was clicked. 
This worked first try which was quite satisfying and was achieveable using prior knowledge and intuition which meant I didn't need to search anything up. 

```
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
```

### Changing the Movement 
However, once I added this to the original coding file, the movements were too messy and had no clear semblance of path. So I decided to change the movement and make use of the rotation to 'swirl' the stars into the middle. 
I also thought to 'shrink' the starrs to make it seem like you are travelling within the star spiral.

Now the stars did start to swirl towards the middle, but for some reason the swirling was not centererd, and the square of the star would often flip inside out. This indicated a negative 's' or y pos where there shouldn't have been, but based on my code there didnt seem to be any issue with it. 
These are the snippets of code that had to do with the shrink and positioning:

```
function createStar() {
let sx = random(100, 300);
let sy = 0;
let ss = random(10,60);
let addStar = new Star(sx, sy, ss);
galaxy.push(addStar);
//more body code inbetween

class Star {

constructor(x, y, s){
  this.x = x;
  this.y = y;
  this.s = s;
  yPos = 2;
}


move() {

this.y = this.y + yPos;

}

shrink() {
  if (this.s === 0||this.y === height/2) {
    this.s = 0;
  }else {
  this.s - 1;
}
```
Adding Y value means that the star goes towards the middle, and once it reached the middle it would disappear. but the stars would glitch out as below:
![Screenshot 2025-01-27 181539](https://github.com/user-attachments/assets/727f37cd-02f9-4da5-9993-54e6a2ced76b)

## Fixing this issue
I was stuck on this for a while before I decided to go back and reread both mine and miros code in detail. 
![Screenshot 2025-01-27 220628](https://github.com/user-attachments/assets/afdd6e2b-4166-4f0b-9fd2-71e247411279)

this is the block of code that was responsible for the rotation, so I searched up the p5 documentation: https://p5js.org/examples/transformation-rotate/
where I discovered that the rotation system existed at **0,0**, which had been translated to the middle of the canvas instead. This meant that the origin point had moved, and I was generating my stars at the centre of the canvas and they were moving out (addition) from there towards the canvas edges, rather than the opposite. 

I changed my random position limits as follows, and deleted the unecessary shape rotation code
![Screenshot 2025-01-27 220907](https://github.com/user-attachments/assets/20371018-04aa-455d-9de1-4361dcb742b4)

Once I changed this, the shrinking rotation worked as expected.
I also removed the x-position movement so that the stars moved smoothly in a spiral towards the centre.

## Final Tweaks
I tweaked around with the random generation positions, star sizes, colors etc. until I was happy with the simulation. 
I'm quite happy with the final outcome!

## NEXT STEPS
If I had more time, I would add luminisance so the stars glowed as they moved, and stars with differernt numbers of points to further create that galaxy effect. 

## MIROS READ ME WORK
### Workshop-1
https://mirow-l.github.io/Workshop-1/

If Web Page Temporarily Down, here is link to the file:
https://editor.p5js.org/mirowrightsonlyons/sketches/7qc9sTDQV

#### Work made for Workshop 1 (14/1/25)
random(0,width), means that a number will be randomly selected for a function which Leo explained which I thought was cool.
Here are my attempts to use it with a function.

I am struggling to use p5.js and generating my Flowers, I will contact Leo because I don't understand what I'm doing wrong and it's making me mad.
I asked Sienna for some help as well as rewatching the class viideo again and looking into some resources

- https://p5js.org/reference/p5/random/ - p5.js guide
- https://youtu.be/c3TeLi6Ns1E?feature=shared - The Coding Train lesson on Youtube

<img width="1288" alt="Screenshot 2025-01-18 at 3 18 45 PM" src="https://github.com/user-attachments/assets/cdcbd60c-48fe-4d26-844c-0ab22734090b" />
This is what I have gotten done so far but I will be moving onto the next workshop to try get my mind on something else.

#### Finishing Up (20/1/25)
Luckily I emailed Leo about it and he sent me back an edited version of my own coding which was very helpful as I compared the two (my version and his) and felt like I understood where I had gone wrong.

<img width="1195" alt="Screenshot 2025-01-21 at 12 18 48 AM" src="https://github.com/user-attachments/assets/776a8a93-4c10-4882-98dc-add2716c2e23" />

#### What inspired it all

<img width="1288" alt="Screenshot 2025-01-18 at 3 18 45 PM" src="https://github.com/user-attachments/assets/a531023c-2ff3-4f95-bddd-5cf12fbb8dc9" />

#### My broken piece of coding

<img width="1271" alt="Screenshot 2025-01-21 at 12 21 23 AM" src="https://github.com/user-attachments/assets/6bb05c31-e25f-4303-be5b-511c38097262" />

#### The work Leo edited, note the difference in using a "for" variable as well as changing the placement of lots of the actions and statements in the order of the script


#### Reflection

- I've linked all the works I've done with this piece as well as Leos version which I tinkered with a little to explore what could be further done with my flower idea. I think it's quite complicated to get the result I want with the limited skills I have at the moment but this might be something worth revisiting in a later workshop.
- Some trouble I ran into was trying to get the new finished version website upload is I had accidentally pasted my simplified original version over the top of the completeled version, luckily I just pasted it in one more time and that sorted things out.

<img width="1484" alt="Screenshot 2025-01-20 at 11 53 23 PM" src="https://github.com/user-attachments/assets/55cf5af1-ea19-4df4-bc1c-b03fa59f975c" />

#### A horrible sight, thank goodness I figured out what to do!

#### Pivot To Rotate (and utilising "for")

- Okay so what I did to add to this is I massively simplified what I was attempting to do and used my simple flower and by using the "for" tool I made it possible for the flower to rotate, a skill I learnt from this p5.js example page: https://p5js.org/examples/transformation-rotate/
- So now I have my simple flower rotating on the canvas which I think looks pretty dandy and it was really easy to implicate the rotate commands so I think I'll use it again in future works.



