import GameUtil from '../gameUtil.js';
import FaceUtil from '../faceUtil.js';
import Bomb from './bomb.js';
import Heart from './heart.js';
import Coin from './coin.js';

class MovingObject {
    constructor (options) {
      this.pos = options.pos || options.game.spawnPosition(this);
      this.vel = options.vel;
      this.radius = options.radius;
      this.distance = this.radius * 2;
      this.color = options.color;
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
      // Grab each point on the edge of the face
      for (let pt of player.face.annotations.silhouette) {
        pt = FaceUtil.scaleCoord(pt);
        // Grab distance between face edge point and bomb
        const centerDist = GameUtil.dist(this.pos, pt);
        // Logic for when the bomb radius is within range of the face edge
        if (this instanceof Bomb && centerDist < this.radius) {
          player.takeDamage(this.damage);
          this.remove();
          return;
          // return is necessary so we don't loop through and get another
          // point which the same bomb is hitting to be considered and run
        };
        if (this instanceof Heart && centerDist < this.radius) {
          player.heal(this.amount);
          this.remove();
          return;
        };
        if (this instanceof Coin && centerDist < this.radius) {
          player.addScore(this.score);
          this.remove();
          return;
        };
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