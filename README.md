# <img align="left" src="https://media.discordapp.net/attachments/597985513701376013/870506369223102514/FACE-MAN_Logo_1.png?width=670&height=670" width=70px> <img align="center" src="https://media.discordapp.net/attachments/597985513701376013/882378436868464710/FACE-MAN_Title.png" width=350px>

## Background

<a href="https://kinkatse.github.io/FACE-MAN/" target="_blank" rel="noopener noreferrer">FACE-MAN</a> is a face recognition app that checks for two key movements, a person’s open mouth and a person’s closed eyes. The app will recognize which of the two specific facial actions you take and display an animation for when your mouth is open or eyes are closed. This game would use technologies like MediaDevices, TensorFlow, Javascript, P5, Node.js, HTML, CSS. The video stream is a loop of video frames captured through the live feed of your camera. The facial movement detection will use algorithms utilizing TensorFlow's ability to acertain points of interest on the face and react to any large movements of the mouth or eyes. (Currently outdated)

## Technologies, Libraries, & APIs Used:
 
- MediaDevices
- TensorFlow
- P5
- Webpack
- NPM
- Node.js
- HTML
- CSS

## Key Features:
 
After granting access to your camera for this app to run, you can click on any filter button to start. You should position yourself further from the screen and keep your head straight for this app's filters and animations. Keep in mind that this app is programmed for only one person at a time. If any error pops up, it will tell you how to position yourself to fix it. Generally, you can test each filter out individually, where you can toggle it on (by clicking the filter button), and toggle it back off (by clicking the filter button again). You can see I do this with the "Toggle Hitbox" and "Scan Mask" filters.

![Toggle Buttons](https://media.discordapp.net/attachments/597985513701376013/882385622071910491/Toggle_Buttons.gif)
 
You can try to use one of the main three filters: Pacman, Kirby or Pikachu. These filters have animations attached to facial movements. For example, opening Kirby's mouth will display dust particles being inhaled by Kirby. Closing both eyes with Pacman will show the ghosts from Pacman (To test this, you can also squint your eyes to see closed eye animations). All three of these filters will have different animations for closing eyes and opening mouth. Try winking as well!

![Toggle Buttons](https://media.discordapp.net/attachments/597985513701376013/882386821017894932/Pacman__Kirby.gif)
 
The other three filters, Pretty, Mustache, Glasses are add ons to existing filters (or none). This means that you can use these filters on top of other filters and can be mixed and combined with other filters. You can see this by having a filter on and then clicking one of these. These (along with toggle hitbox) are the only ones that can mix and match so have fun with trying different combinations. They work standalone as well!

![Toggle Buttons](https://media.discordapp.net/attachments/597985513701376013/882390035356319915/Add_On_Filters.gif)
 
The last button is just a simple clear for every single filter you have on at the moment!

![Toggle Buttons](https://media.discordapp.net/attachments/597985513701376013/882389665527771156/Clear_Button.gif)

## Code Snippets:

The Tensorflow library allots 486 3D facial landmarks to capture the full geometry of a human face. To gather the information needed to detect mouth movement or eye movement, we had to refer to the object created, which we called "face". Inside the face object, there are different ways to utilize these landmarks including annotations, boundingbox, mesh, and scaledmesh. I used annotations for most facial actions but I did use boundingbox to indicate corners of the hitbox filter and scaledmesh for the nose

<h4>Open Mouth Animation</h4>

For detecting an open mouth, I used the annotations which offered specific locations of the landmarks called "lipsLower" or "lipsUpper" and would have to scale the coordinates to an x and y. This allows us to make a conditional detecting if the lower lips landmark's distance from the upper lips landmark is large enough to play an animation.

```
// We originally accessed these landmarks through face and stored them in these variables.
// It was originally stored like this:
// "let lipsUpper =  scaleCoord(face.annotations.lipsUpperOuter[5]);"
// "let lipsLower = scaleCoord(face.annotations.lipsLowerOuter[4]);"
// scaleCoord is a function I wrote to map each coordinate of the landmark
// to x and y values making it more convenient to use
if (lipsLower.y - lipsUpper.y > 30 ) {
    fill("white");
    noStroke();
    x = lipsLower.x;
    y = lipsLower.y - 50;
    // This is the dust animation of the Kirby Filter
    noStroke();
    dustPts = [{x, y}, {x, y}];
    for (let i = 0; i < dustPts.length; i++) {
      let pt = dustPts[i];
      // This calls on the Dust.js script I wrote which has all the properties of
      // the dust animation.
      let dust = new Dust(pt.x, pt.y);
      dusts.push(dust);
      if (dusts[0].size < 1) {
          dusts.shift(dust);
      }
    }
    for (let i = 0; i < dusts.length; i++) {
      let d = dusts[i];
      // This is where the dust animation gets updated and shown.
      d.update();
      d.show();
      d.behaviors();
    }
 }
```

Here is the function to map coordinates of the landmark for convenience.

```
function scaleCoord(pt) {
   let x = map(pt[0], 0,video.width, 0,width);
   let y = map(pt[1], 0,video.height, 0,height);
   return createVector(x, y);
}
```

Here is how the Dust.js script interacts with the filter script.

```
let angle = 0;

function Dust(x,y) {
  // Initializes position, target position, speed, etc.
  this.pos = createVector(random(width), random(height));
  this.target = createVector(x,y);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.size = 15;
  this.maxSpeed = 150;
  this.maxForce = 1.8;
}

Dust.prototype.update = function() {
  // Updates the speed and size here
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
  this.size -= 1;
}

Dust.prototype.show = function() {
  // Creating squares (dust particles) and rotating in P5
  push();
  translate(this.pos.x, this.pos.y);
  rotate(angle);
  fill(255);
  noStroke();
  strokeWeight(2);
  rectMode(CENTER);
  square(0, 0, this.size);
  pop();
  angle += radians(80)
}

Dust.prototype.behaviors = function() {
  // Applies the force in direction of target
  let arrive = this.arrive(this.target);
  this.applyForce(arrive);
}

Dust.prototype.applyForce = function(f) {
  // Adding the force to the acceleration
  this.acc.add(f);
}

Dust.prototype.arrive = function(target) {
  // Calculating speed and determining how to arrive at target
  let desired = p5.Vector.sub(target, this.pos);
  let dist = desired.mag();
  let speed = this.maxSpeed;
  if (dist < 100) {
    speed = map(dist, 0, 100, this.maxSpeed, 0);
  }
  desired.setMag(speed);
  let steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxForce);
  return steer;
};
```

<h4>Close Eye Animation</h4>

Similarly to the open mouth animation, close eye animations use the same concepts and logic except with rightEye and leftEye as our landmarks.

```
if (rightEyeL.y - rightEyeU.y <= 5 && leftEyeL.y - leftEyeU.y <= 5) {
   noFill();
   strokeWeight(5);
   stroke("black");
   curve(
       rightEyeU.x + 15, rightEyeU.y + 85,
       rightEyeU.x + 15, rightEyeU.y - 10,
       rightEyeU.x - 35, rightEyeU.y - 20,
       rightEyeU.x - 45, rightEyeU.y + 70
   );
   curve(
       leftEyeU.x + 40, leftEyeU.y + 70,
       leftEyeU.x + 40, leftEyeU.y - 20,
       leftEyeU.x - 10, leftEyeU.y - 10,
       leftEyeU.x - 20, leftEyeU.y + 85
   );
   // Kirby Sleep
   x = rightEyeU.x + 150;
   y = rightEyeU.y - 150;
   // Using the Zzz.js script
   if (zzzs.length === 0) {
       zzzs.push(new Zzz(x,y));
   }
   zzzs[0].show();
   zzzs[0].update();
   zzzs[0].behaviors();
}
```

Here is how the Zzz.js script interacts with the filter script.

```
function Zzz(x,y) {
  // Initializes position, target position, speed, etc.
  this.pos = createVector(random(width), random(height));
  this.target = createVector(x,y);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.width = 30;
  this.height = 53;
  this.opacity = 255;
  this.maxSpeed = 5;
  this.maxForce = 0.2;
}

Zzz.prototype.update = function() {
  // Updates the speed here
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
}

Zzz.prototype.show = function() {
  // Drawing the Z's in P5
  push();
  translate(this.pos.x, this.pos.y);
  translate(0, 0);
  stroke("black");
  strokeWeight(15);
  line(0, 5, 100, 5);
  line(0, 5, 100, -110);
  line(0, -110, 100, -110);
  translate(120, -15);
  stroke("black");
  strokeWeight(12.5);
  line(0, 5, 60, 5);
  line(0, 5, 60, -80);
  line(0, -80, 60, -80);
  translate(80, -15);
  stroke("black");
  strokeWeight(10);
  line(0, 5, 30, 5);
  line(0, 5, 30, -50);
  line(0, -50, 30, -50);
  pop();
}

Zzz.prototype.behaviors = function() {
  // Applies the force in direction of target
  let arrive = this.arrive(this.target);
  this.applyForce(arrive);
}

Zzz.prototype.applyForce = function(f) {
  // Adding the force to the acceleration
  this.acc.add(f);
}

Zzz.prototype.arrive = function(target) {
  // Calculating speed and determining how to arrive at target
  let desired = p5.Vector.sub(target, this.pos);
  let dist = desired.mag();
  let speed = this.maxSpeed;
  if (dist < 100) {
    speed = map(dist, 0, 100, this.maxSpeed, 0);
  }
  desired.setMag(speed);
  let steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxForce);
  return steer;
};
```

## Future Plans:

I originally intended this to be a game where your face has a hitbox (hence the toggle hitbox filter) and you dodge obstacles like the ghosts and eat certain food objects for points. I decided that it was for the best to focus on the integration of Tensorflow and get familiar with that first before moving on to game elements because I was aiming to finish this project in 1 week. Thus, the game parts is now a bonus which I plan to implement later on.
