import Bomb from "./entities/bomb";
import Player from "./entities/player";
import FaceUtil from "./faceUtil";
import GameUtil from "./gameUtil";

class Game {
    constructor(face) {
        this.player = new Player(face);
        this.bombs = [];
        this.hearts = [];
        this.coins = [];
        this.ghosts = [];

        this.addBombs();
    }

    static get defaults() {
        return {
            DIM_X: 700,
            DIM_Y: 450,
            NUM_BOMBS: 2
        };
    }

    draw(ctx, face) {
        if (this.player) this.player.face = face;
        this.bombs.forEach(bomb => {
            bomb.draw(ctx);
        });
    }

    update() {
        this.bombs.forEach(bomb => {
            bomb.update();
        });
        // Check collisions
        if (this.player.face) this.checkCollisions()
    }

    add(object) {
        if (object instanceof Bomb) {
            this.bombs.push(object);
        } else if (object instanceof Heart) {
            this.hearts.push(object);
        } else if (object instanceof Coin) {
            this.coins.push(object);
        } else if (object instanceof Ghost) {
            this.ghosts.push(object);
        } else {
            throw new Error("unknown type of object");
        }
    };

    addBombs() {
        for (let i = 0; i < Game.defaults.NUM_BOMBS; i++) {
            this.add(new Bomb({ game: this }));
        }
    }

    spawnPosition(object) {
        // This is to make sure we get a random position, and
        // try again if the position is in the face's bounds
        if (object instanceof Bomb) {
            let x = Game.defaults.DIM_X * Math.random();
            let y = Game.defaults.DIM_Y * Math.random();
            while ( this.player.face
                && x < FaceUtil.faceBoundsRightX(this.player.face)
                && x > FaceUtil.faceBoundsLeftX(this.player.face)
                && y > FaceUtil.faceBoundsTopY(this.player.face)
                && y < FaceUtil.faceBoundsBottomY(this.player.face)
                ) {
                    x = Game.defaults.DIM_X * Math.random();
                    y = Game.defaults.DIM_Y * Math.random();
            }
            return [x, y]
        } else if (object instanceof Heart) {
        } else if (object instanceof Coin) {
        } else if (object instanceof Ghost) {
        } else {
            throw new Error("unknown type of object");
        }
    }

    checkCollisions() {
        for (let i = 0; i < this.bombs.length; i++) {
            const obj = this.bombs[i];
            // So far only collision for player
            obj.collisionDetection(this.player)
        }

        // const allObjects = this.allObjects();
        // for (let i = 0; i < allObjects.length; i++) {
        //   for (let j = 0; j < allObjects.length; j++) {
        //     // This is checking all pairs twice, not optimized
        //     // We should make it unique pairs only
        //     // Much more optimized if you iterate over the asteroids first loop
        //     // and the second loop is none asteroids, since thats the only object
        //     // with a working collideWith(obj) function. The way this worked was
        //     // running each class' inherited collideWith(obj) function which did
        //     // nothing and was a waste of space and time for everyone :/
        //     const obj1 = allObjects[i];
        //     const obj2 = allObjects[j];
      
        //     if (obj1.isCollidedWith(obj2)) {
        //       const collision = obj1.collideWith(obj2);
        //       if (collision) return;
        //     }
        //   }
        // }
      };

    remove(object) {
        // if (object === undefined) {
        //     this.bombs.shift()
        //     this.bombs.shift()
        //     this.bombs.shift()
        // }
        if (object instanceof Bomb) {
            this.bombs.splice(this.bombs.indexOf(object), 1)
            if (this.bombs.length === 0) this.addBombs();
        } else if (object instanceof Heart) {
        } else if (object instanceof Coin) {
        } else if (object instanceof Ghost) {
        } else {
            throw new Error("unknown type of object");
        }
    }

    isOutOfBounds(pos) {
        return (pos[0] < 0) || (pos[1] < 0) ||
        (pos[0] > Game.defaults.DIM_X) || (pos[1] > Game.defaults.DIM_Y);
    };

    wrap(pos) {
        return [
          GameUtil.wrap(pos[0], Game.defaults.DIM_X),
          GameUtil.wrap(pos[1], Game.defaults.DIM_Y)
        ];
    };
}

export default Game;