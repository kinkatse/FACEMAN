import MovingObject from "./movingObject";
import GameUtil from "../gameUtil";

class Coin extends MovingObject {
    constructor(options) {
        options = options || {};
        options.color = Coin.defaults.COLOR;
        options.pos = options.pos
        options.radius = Coin.defaults.RADIUS;
        options.vel = options.vel || GameUtil.randomVec(Coin.defaults.SPEED);
        options.type = "coin";

        super(options);

        const frame1 = document.getElementById("coin-icon-1")
        const frame2 = document.getElementById("coin-icon-2")
        const frame3 = document.getElementById("coin-icon-3")
        const frame4 = document.getElementById("coin-icon-4")
        const frame5 = document.getElementById("coin-icon-5")
        const frame6 = document.getElementById("coin-icon-6")
        const frame7 = document.getElementById("coin-icon-7")
        this.imageArr = [frame1, frame2, frame3, frame4, frame5, frame6, frame7]
        this.score = 50;
    }

    static get defaults() {
        return {
            COLOR: "yellow",
            RADIUS: 15,
            SPEED: 1
        };
    }

    draw(ctx) {
        // Numbers are to adjust the image correctly
        ctx.drawImage(this.imageArr[0], this.pos[0] - 26, this.pos[1] - 25, 50, 50)
        
        // make the frame go to back of queue
        const frame = this.imageArr.shift()
        this.imageArr.push(frame)


        // MovingObject.prototype.draw.call(this, ctx);
    }
}

export default Coin;