import Bomb from "./entities/bomb";
import Ghost from "./entities/ghost";
import Apple from "./entities/apple";
import Coin from "./entities/coin";
import Player from "./entities/player";
import FaceUtil from "./faceUtil";
import GameUtil from "./gameUtil";

class Game {
    constructor(face, time) {
        this.player = new Player(face);
        this.time = time;
        this.bombs = [];
        this.apples = [];
        this.coins = [];
        this.ghosts = [];
        this.areaHit = [];
        this.screenShakeQueue = [1, 2, 3, 4];
        this.gameover = false;

        this.addBombs();
        this.addGhosts();
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
    }

    static get defaults() {
        return {
            DIM_X: 700,
            DIM_Y: 450,
            NUM_BOMBS: 3,
            NUM_GHOSTS: 1,
            NUM_APPLES: 1,
            NUM_COINS: 2
        };
    }

    draw(ctx, face) {
        if (this.player) this.player.face = face;
        this.bombs.forEach(bomb => {
            bomb.draw(ctx);
        });
        this.ghosts.forEach(ghost => {
            ghost.draw(ctx);
        });
        this.apples.forEach(apple => {
            apple.draw(ctx);
        });
        this.coins.forEach(coin => {
            coin.draw(ctx);
        });
        this.areaHit.forEach(spot => {
            spot.draw(ctx)
        })
        this.player.draw(ctx, this.healthCtx)
    }

    update() {
        this.bombs.forEach(bomb => {
            bomb.update();
        });
        this.ghosts.forEach(ghost => {
            ghost.update();
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
        } else if (object instanceof Ghost) {
            setTimeout(() => this.ghosts.push(object), 5000)
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
            this.add(new Bomb({ game: this, time: this.time }));
        }
    }

    addBomb() {
        this.add(new Bomb({ game: this, time: this.time }));
    }

    addGhosts() {
        for (let i = 0; i < Game.defaults.NUM_GHOSTS; i++) {
            this.add(new Ghost({ game: this, time: this.time }));
        }
    }

    addApples() {
        for (let i = 0; i < Game.defaults.NUM_APPLES; i++) {
            this.add(new Apple({ game: this, time: this.time }));
        }
    }

    addCoins() {
        for (let i = 0; i < Game.defaults.NUM_COINS; i++) {
            this.add(new Coin({ game: this, time: this.time }));
        }
    }

    spawnPosition(object) {
        if (object instanceof Apple) {
            // This doesn't work currently
            const max = 0.95;
            const min = 0.05;
            // Math.random logic gets number between the max and min above
            let x = Game.defaults.DIM_X * Math.random() * (max - min) + min;
            let y = Game.defaults.DIM_Y * Math.random() * (max - min) + min;
            while ( this.player.face
                && x < FaceUtil.faceBoundsRightX(this.player.face)
                && x > FaceUtil.faceBoundsLeftX(this.player.face)
                && y > FaceUtil.faceBoundsTopY(this.player.face)
                && y < FaceUtil.faceBoundsBottomY(this.player.face)
                ) {
                    x = Game.defaults.DIM_X * Math.random() * (max - min) + min;
                    y = Game.defaults.DIM_Y * Math.random() * (max - min) + min;
            }
            return [x, y]
        } else {
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
        }
    }

    checkCollisions() {
        for (let i = 0; i < this.bombs.length; i++) {
            const obj = this.bombs[i];
            obj.collisionDetection(this.player)
        }
        for (let i = 0; i < this.ghosts.length; i++) {
            const obj = this.ghosts[i];
            obj.collisionDetection(this.player)
        }
        for (let i = 0; i < this.apples.length; i++) {
            const obj = this.apples[i];
            obj.collisionDetection(this.player)
        }
        for (let i = 0; i < this.coins.length; i++) {
            const obj = this.coins[i];
            obj.collisionDetection(this.player)
        }
      };

    remove(object) {
        if (object instanceof Bomb) {
            this.bombs.splice(this.bombs.indexOf(object), 1)
            if (this.bombs.length === 2) this.addBomb();
        } else if (object instanceof Ghost) {
            this.ghosts.splice(this.ghosts.indexOf(object), 1)
            if (this.ghosts.length === 0) {
                setTimeout(() => this.addGhosts(), 1000)
            }
        } else if (object instanceof Apple) {
            this.apples.pop();
            this.addApples();
        } else if (object instanceof Coin) {
            this.coins.pop();
            if (this.coins.length === 0) {
                this.addCoins();
            }
        } else if (object instanceof Ghost) {
        } else {
            throw new Error("unknown type of object");
        }
    }

    isOutOfBounds(pos) {
        return (pos[0] < 0) || (pos[1] < 0) ||
        (pos[0] > Game.defaults.DIM_X) || (pos[1] > Game.defaults.DIM_Y);
    };

    isOffScreen(pos) {
        return (pos[0] < -500) || (pos[1] < -500) ||
        (pos[0] > Game.defaults.DIM_X + 500) || (pos[1] > Game.defaults.DIM_Y + 500);
    };

    wrap(pos) {
        return [
          GameUtil.wrap(pos[0], Game.defaults.DIM_X),
          GameUtil.wrap(pos[1], Game.defaults.DIM_Y)
        ];
    };

    endGame() {
        this.bombs = [];
        this.apples = [];
        this.coins = [];
        this.ghosts = [];
        this.areaHit = [];
    }
}

export default Game;