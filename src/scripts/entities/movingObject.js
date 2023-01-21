import GameUtil from '../gameUtil.js';

class MovingObject {
    constructor (options) {
        this.pos = options.pos || options.game.spawnPosition(this);
        this.vel = options.vel;
        this.radius = options.radius;
        this.color = options.color;
        this.game = options.game;
    }

    collideWith() {

    }

    draw(ctx) {
        ctx.fillStyle = this.color;
      
        ctx.beginPath();
        ctx.arc(
          this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
        );
        ctx.fill();
    };

    isCollidedWith(otherObject) {
        // const centerDist = Util.dist(this.pos, otherObject.pos);
        // return centerDist < (this.radius + otherObject.radius);
    };

    update(timeDelta) {
        // debugger
        // // How fast our app should be playing in time essentially
        // const FRAMEDELTA = 1000 / 60;
        // const velocityScale = timeDelta / FRAMEDELTA;
        // // Use vector and scale it to know the new direction for the pos
        // const offsetX = this.vel[0] * velocityScale;
        // const offsetY = this.vel[1] * velocityScale;
      
        // Set new position
        // this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
        this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
      
        if (this.game.isOutOfBounds(this.pos)) {
        //   if (this.isWrappable) {
        //     this.pos = this.game.wrap(this.pos);
        //   } else {
            this.remove();
        //   }
        }
    };

    remove() {
        this.game.remove(this);
    };
}

export default MovingObject;