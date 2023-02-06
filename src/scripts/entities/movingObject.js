import GameUtil from '../gameUtil.js';
import FaceUtil from '../faceUtil.js';

class MovingObject {
    constructor (options) {
      this.pos = options.pos || options.game.spawnPosition(this);
      this.vel = options.vel;
      this.radius = options.radius;
      this.distance = this.radius * 2;
      this.color = options.color;
      this.type = options.type;
      this.game = options.game;
      this.isWrappable = true;
    }

    draw(ctx) {
      ctx.fillStyle = this.color;
    
      ctx.beginPath();
      ctx.arc(
        this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
      );
      ctx.fill();

    };

    // Flaw is that sometimes in between a frame, a player can move onto
    // a bomb and the bomb exists inside the face area. This only checks
    // if they hit the player face edge so it's something to work on later
    collisionDetection(player) {
      // Detect bomb and coin collision
      // Grab each point on the edge of the face
      for (let pt of player.face.annotations.silhouette) {
        pt = FaceUtil.scaleCoord(pt);
        // Grab distance between face edge point and bomb
        const centerDist = GameUtil.dist(this.pos, pt);
        // Logic for when the bomb radius is within range of the face edge
        if (this.type === "bomb" && centerDist < this.radius) {
          player.takeDamage(this.damage);
          this.remove();
          GameUtil.screenShakeEffect(this.game.screenShakeQueue)

          return;
          // return is necessary so we don't loop through and get another
          // point which the same bomb is hitting to be considered and run
        };

        if (this.type === "coin" && centerDist < this.radius) {
          player.addScore(this.score);
          this.remove();
          return;
        };
      }

      // Detect apple collision
      // Have the mouth open detection here so we don't have to run
      // through this iteration each if it's not actually open
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

    update() {
      // Set new position
      this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    
      if (this.game.isOutOfBounds(this.pos)) {
        if (this.isWrappable) {
          this.pos = this.game.wrap(this.pos);
        } else {
          this.remove();
        }
      }
    };

    remove() {
      this.game.remove(this);
    };
}

export default MovingObject;