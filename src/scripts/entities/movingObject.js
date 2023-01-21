import GameUtil from '../gameUtil.js';
import FaceUtil from '../faceUtil.js';

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
      
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.moveTo(this.pos[0], this.pos[1] - 20);
      ctx.bezierCurveTo(
        this.pos[0], this.pos[1] - 30,
        this.pos[0] + 10, this.pos[1] - 30,
        this.pos[0] + 10, this.pos[1] - 25
      );
      ctx.stroke();
    };

    collisionDetection(player) {
      // Grab each point on the edge of the face
      for (let pt of player.face.annotations.silhouette) {
        pt = FaceUtil.scaleCoord(pt);
        // Grab distance between face edge point and bomb
        const centerDist = GameUtil.dist(this.pos, pt);
        // Logic for when the bomb radius is within range of the face edge
        if (centerDist < this.radius) {
          player.takeDamage(this.damage);
          this.remove()
          return;
          // return is necessary so we don't loop through and get another
          // point which the same bomb is hitting to be considered and run
        };
      }

      // const centerDist = GameUtil.dist(this.pos, otherObject.pos);
      // return centerDist < (this.radius + otherObject.radius);
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