import Bomb from "./entities/bomb";

class Game {
    constructor() {
        this.user = [];
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
        // debugger
        const faceBounds_leftX = null;
        const faceBounds_rightX = null;
        const faceBounds_topY = null;
        const faceBounds_bottomY = null;
        if (this.user.length !== 0) {
            faceBounds_leftX = this.user[0].boundingBox.topLeft[0];
            faceBounds_rightX = this.user[0].boundingBox.bottomRight[0];
            faceBounds_topY = this.user[0].boundingBox.topLeft[1];
            faceBounds_bottomY = this.user[0].boundingBox.bottomRight[1];
        }
        if (object instanceof Bomb) {
            const x = Game.defaults.DIM_X * Math.random();
            const y = Game.defaults.DIM_Y * Math.random();
            if (x < faceBounds_rightX && x > faceBounds_leftX
                && y < faceBounds_topY && y > faceBounds_bottomY) {
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

    draw(ctx, face) {
        this.user.pop();
        this.user.push(face);
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
}

export default Game;