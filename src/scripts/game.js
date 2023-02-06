import Bomb from "./entities/bomb";
import Apple from "./entities/apple";
import Coin from "./entities/coin";
import Player from "./entities/player";
import FaceUtil from "./faceUtil";
import GameUtil from "./gameUtil";

class Game {
    constructor(face) {
        this.player = new Player(face);
        this.bombs = [];
        this.apples = [];
        this.coins = [];
        this.ghosts = [];

        this.addBombs();
        this.addApples();
        this.addCoins();

        this.scoreEl = document.getElementById("score-container")
        this.scoreEl.style.display = "block";

        // Create new canvas for the health bar
        this.healthEl = document.getElementById("health-bar");
        this.healthEl.style.display = "block";
        this.healthEl.height = 450;
        this.healthEl.width = 50;
        this.healthCtx = this.healthEl.getContext("2d");
        
        this.screenShakeQueue = [1, 2, 3, 4];
    }

    static get defaults() {
        return {
            DIM_X: 700,
            DIM_Y: 450,
            NUM_BOMBS: 4,
            NUM_APPLES: 1,
            NUM_COINS: 1
        };
    }

    draw(ctx, face) {
        if (this.player) this.player.face = face;
        this.bombs.forEach(bomb => {
            bomb.draw(ctx);
        });
        this.apples.forEach(apple => {
            apple.draw(ctx);
        });
        this.coins.forEach(coin => {
            coin.draw(ctx);
        });
        this.player.draw(ctx, this.healthCtx)
    }

    update() {
        this.bombs.forEach(bomb => {
            bomb.update();
        });
        this.apples.forEach(apple => {
            apple.update();
        });
        this.coins.forEach(coin => {
            coin.update();
        });
        // Check collisions after we have a player face loaded
        if (this.player.face) this.checkCollisions()
    }

    add(object) {
        if (object instanceof Bomb) {
            this.bombs.push(object);
        } else if (object instanceof Apple) {
            this.apples.push(object);
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

    addApples() {
        for (let i = 0; i < Game.defaults.NUM_APPLES; i++) {
            this.add(new Apple({ game: this }));
        }
    }

    addCoins() {
        for (let i = 0; i < Game.defaults.NUM_COINS; i++) {
            this.add(new Coin({ game: this }));
        }
    }

    spawnPosition(object) {
        // This is to make sure we get a random position, and
        // try again if the position is in the face's bounds
        // if (object instanceof Bomb) {
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
        // } else if (object instanceof Apple) {
        // } else if (object instanceof Coin) {
        // } else if (object instanceof Ghost) {
        // } else {
        //     throw new Error("unknown type of object");
        // }
    }

    checkCollisions() {
        for (let i = 0; i < this.bombs.length; i++) {
            const obj = this.bombs[i];
            // So far only collision for player
            obj.collisionDetection(this.player)
        }
        for (let i = 0; i < this.apples.length; i++) {
            const obj = this.apples[i];
            // So far only collision for player
            obj.collisionDetection(this.player)
        }
        for (let i = 0; i < this.coins.length; i++) {
            const obj = this.coins[i];
            // So far only collision for player
            obj.collisionDetection(this.player)
        }
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
        } else if (object instanceof Apple) {
            this.apples.pop();
            this.addApples();
        } else if (object instanceof Coin) {
            this.coins.pop();
            this.addCoins();
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