# <img align="left" src="https://media.discordapp.net/attachments/597985513701376013/870506369223102514/FACE-MAN_Logo_1.png?width=670&height=670" width=70px> <img align="center" src="https://media.discordapp.net/attachments/597985513701376013/882378436868464710/FACE-MAN_Title.png" width=350px>

## Background

<a href="https://kinkatse.github.io/FACEMAN/" target="_blank" rel="noopener noreferrer">FACE-MAN</a> is a face detection game which uses your video feed as the game environment itself! Your face is your player and you need to physically move to dodge the obstacles or reach certain items. It also checks for closed eye movement and open mouth movement for certain actions in the game. This game would use technologies like MediaDevices, TensorFlow, Javascript, HTML, CSS. The video stream is a loop of video frames captured through the live feed of your camera. The facial movement detection will use algorithms utilizing TensorFlow to acertain points of interest on the face and react to any large movements of the mouth or eyes.

![Gameplay](https://media.giphy.com/media/SrYK6S4IQgDs1zk4AQ/giphy.gif)

## Technologies, Libraries, & APIs Used:
 
- MediaDevices
- TensorFlow
- Webpack
- NPM
- HTML
- CSS

## Key Features:

After granting access to your camera for this app to run, you can click on the scan mask filter to illustrate how the TensorFlow API responds with all facial features.

![Scan Mask](https://media.giphy.com/media/1xjNi7GjiyGB3nL6ea/giphy.gif)

When you start the game, there are 4 entities to be aware of!
### 1. Bomb
- You need to avoid the bombs! They inflict damage and if you reach 0 health, that is game over!

![Bomb](https://media.giphy.com/media/sERi4POg5ubvPUZsay/giphy.gif)


### 2. Apple
- If you are low on health, no worries! Apples can heal you. However, you need to open your mouth in order to eat the apple!

![Apple](https://media.giphy.com/media/J1ncjVPHKGDhYl7o9j/giphy.gif)

### 3. Coin
- Coins are for score. See how long you can last and compare your score with others!

![Coin](https://media.giphy.com/media/BsYEDxwec2THtabAHa/giphy.gif)

### 4. Ghost
- Ghosts are slow but big obstacles so sometimes they can be hard to avoid. A good way to avoid them is to close (or squint) your eyes so the ghost thinks you're asleep! Then you can pass through the ghost!

![Ghost](https://media.giphy.com/media/K4bZGjfvV71HoiAYVu/giphy.gif)

## Code Snippets:

The Tensorflow library allots 486 3D facial landmarks to capture the full geometry of a human face. To gather the information needed to detect mouth movement or eye movement, we had to refer to the object created, which we called "face". Inside the face object, there are different ways to utilize these landmarks including annotations, boundingbox, mesh, and scaledmesh. I used annotations for most facial actions

<h4>Open Mouth Detection</h4>

For detecting an open mouth, I used the annotations which offered specific locations of the landmarks called "lipsLower" or "lipsUpper". I calculated the distance between these two points and return true conditionally if the distance reached a certain number

```
    isMouthOpen = (face) => {
        // Grabbing specific points of the face object for the lips
        const lipsUpper = face.annotations.lipsUpperOuter[5]
        const lipsLower = face.annotations.lipsLowerOuter[4]
        // Keying into these coordinates for the y coordinate
        if (lipsLower[1] - lipsUpper[1] > 30 ) {
            return true;
        }
        return false;
    }
```

Here is where the code will check for isMouthOpen and check collisions. Essentially, if the isMouthOpen function returns true, then we check if the apple is in range of the mouth points and that would then heal the player and remove the apple.

```
    collisionDetection(player) {
      if (FaceUtil.isMouthOpen(player.face)) {
        // Need all the lip points to iterate through for collision detection
        for (let pt of FaceUtil.allLipPoints(player.face)) {
          // Grab distance between face edge point and bomb
          const mouthDist = GameUtil.dist(this.pos, pt);
  
          if (this.type === "apple" && mouthDist < this.radius) {
            player.heal(this.amount);
            this.remove();
            return;
          };
        }
      }
    };
```

## Future Plans:

I originally created this game with some filters to put on with some animations playing which is still live at <a href="https://kinkatse.github.io/FACE-MAN/" target="_blank" rel="noopener noreferrer">FACE-MAN</a>, but I have since revamped this project and refactored a lot of code. The main purpose for this version of the project was to set it up for game functionality and then later on I could add back in my animations and filters.
