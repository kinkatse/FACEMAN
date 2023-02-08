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

        this.imageArr = GameUtil.coinFramesArr()
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