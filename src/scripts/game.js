import Bomb from "./entities/bomb";
import GameUtil from "./gameUtil";

class Game {
    constructor(face) {
        this.user = face;
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
            NUM_BOMBS: 5
        };
    }

    draw(ctx, face) {
        this.user = face;
        this.bombs.forEach(bomb => {
            bomb.draw(ctx);
        });
    }

    update(delta) {
        this.bombs.forEach(bomb => {
            bomb.update(delta);
        });
        // Check collisions
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
        // This is to get the constants of the face's bounds
        let faceBounds_leftX = null;
        let faceBounds_rightX = null;
        let faceBounds_topY = null;
        let faceBounds_bottomY = null;
        if (this.user) {
            faceBounds_leftX = this.user.boundingBox.topLeft[0];
            faceBounds_rightX = this.user.boundingBox.bottomRight[0];
            faceBounds_topY = this.user.boundingBox.topLeft[1];
            faceBounds_bottomY = this.user.boundingBox.bottomRight[1];
        }

        // This is to make sure we get a random position, and
        // try again if the position is in the face's bounds
        if (object instanceof Bomb) {
            let x = Game.defaults.DIM_X * Math.random();
            let y = Game.defaults.DIM_Y * Math.random();
            while ( this.user
                && x < GameUtil.faceBoundsRightX(this.user)
                && x > GameUtil.faceBoundsLeftX(this.user)
                && y > GameUtil.faceBoundsTopY(this.user)
                && y < GameUtil.faceBoundsBottomY(this.user)
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

    remove(object) {
        if (object === undefined) {
            this.bombs.shift()
            this.bombs.shift()
            this.bombs.shift()
        }
        // if (object instanceof Bomb) {
        //     this.bombs.splice(this.bombs.indexOf(object), 1)
        // } else if (object instanceof Heart) {
        // } else if (object instanceof Coin) {
        // } else if (object instanceof Ghost) {
        // } else {
        //     throw new Error("unknown type of object");
        // }
    }
}

export default Game;