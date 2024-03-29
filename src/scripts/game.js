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
        this.difficulty = "beginner"

        this.maxBomb = Game.defaults.NUM_BOMBS;
        this.maxGhost = Game.defaults.NUM_GHOSTS;
        this.maxApple = Game.defaults.NUM_APPLES;
        this.maxCoin = Game.defaults.NUM_COINS;
        this.addBombs();
        // Spawn first ghost after 30 seconds in timer
        setTimeout(() => this.addGhosts(), 30000)
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

        this.levelElement = document.getElementById('level')
    }

    static get defaults() {
        return {
            DIM_X: 700,
            DIM_Y: 450,
            NUM_BOMBS: 2,
            NUM_GHOSTS: 1,
            NUM_APPLES: 1,
            NUM_COINS: 1
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
        this.increaseDifficulty()

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

    increaseDifficulty() {
        if (this.time > 120) {
            if (this.levelElement.innerHTML !== "Level: MASTER") GameUtil.playNextLevelSound()
            this.difficulty = "master"
            this.maxCoin = 3;
            this.addCoins();
            this.bombs.forEach((bomb) => {
                if (bomb.speed < 9) bomb.vel = GameUtil.scale(bomb.vel, 1.5)
                bomb.speed = 9
            })
            this.coins.forEach((coin) => {
                if (coin.speed === 1) coin.vel = GameUtil.scale(coin.vel, 6)
                else if (coin.speed === 3) coin.vel = GameUtil.scale(coin.vel, 2)
                coin.speed = 6
            })
            this.ghosts.forEach((ghost) => ghost.radius = 105)
            this.levelElement.innerHTML = "Level: MASTER"
            this.levelElement.style.color = "rgb(255, 29, 29)"
         } else if (this.time > 60) {
            if (this.levelElement.innerHTML !== "Level: Hard") GameUtil.playNextLevelSound()
            this.difficulty = "hard"
            this.maxBomb = 4;
            this.maxCoin = 2;
            this.addBombs();
            this.addCoins();
            this.coins.forEach((coin) => {
                if (coin.speed < 3) coin.vel = GameUtil.scale(coin.vel, 1.5)
                coin.speed = 3
            })
            this.levelElement.innerHTML = "Level: Hard"
            this.levelElement.style.color = "rgb(255, 142, 29)"
        } else if (this.time > 30) {
            if (this.levelElement.innerHTML !== "Level: Normal") GameUtil.playNextLevelSound()
            this.difficulty = "normal"
            // increase speed of bombs and coins
            this.bombs.forEach((bomb) => {
                if (bomb.speed < 6) bomb.vel = GameUtil.scale(bomb.vel, 1.5)
                bomb.speed = 6
            })
            this.coins.forEach((coin) => {
                if (coin.speed < 2) coin.vel = GameUtil.scale(coin.vel, 2)
                coin.speed = 2
            })
            this.levelElement.innerHTML = "Level: Normal"
            this.levelElement.style.color = "rgb(255, 251, 29)"
        } else if (this.time > 10) {
            if (this.levelElement.innerHTML !== "Level: Easy") GameUtil.playNextLevelSound()
            this.difficulty = "easy"
            this.maxBomb = 3;
            this.maxCoin = 2;
            this.addBombs();
            this.addCoins();
            this.levelElement.innerHTML = "Level: Easy"
            this.levelElement.style.color = "rgb(29, 255, 67)"
        }
    }

    add(object) {
        if (object instanceof Bomb) {
            this.bombs.push(object);
        } else if (object instanceof Ghost) {
            this.ghosts.push(object)
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
        for (let i = this.bombs.length; i < this.maxBomb; i++) {
            this.add(new Bomb({ game: this, time: this.time }));
        }
    }

    addBomb() {
        this.add(new Bomb({ game: this, time: this.time }));
    }

    addGhosts() {
        this.add(new Ghost({ game: this, time: this.time }));
    }

    addApples() {
        for (let i = this.apples.length; i < this.maxApple; i++) {
            this.add(new Apple({ game: this, time: this.time }));
        }
    }

    addCoins() {
        for (let i = this.coins.length; i < this.maxCoin; i++) {
            this.add(new Coin({ game: this, time: this.time }));
        }
    }

    addCoin() {
        this.add(new Coin({ game: this, time: this.time }));
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
            if (this.bombs.length <= this.maxBomb) this.addBomb();
        } else if (object instanceof Ghost) {
            this.ghosts.splice(this.ghosts.indexOf(object), 1)
            if (this.ghosts.length === 0) {
                setTimeout(() => this.addGhosts(), 1000)
            }
        } else if (object instanceof Apple) {
            this.apples.pop();
            this.addApples();
        } else if (object instanceof Coin) {
            // this.coins.pop();
            this.coins.splice(this.coins.indexOf(object), 1)
            if (this.coins.length <= this.maxCoin) this.addCoin();
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