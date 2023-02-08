import MovingObject from "./movingObject";
import GameUtil from "../gameUtil";

class Bomb extends MovingObject {
    constructor(options) {
        options = options || {};
        options.color = Bomb.defaults.COLOR;
        options.pos = options.pos;
        options.radius = Bomb.defaults.RADIUS;
        options.vel = options.vel || GameUtil.randomVec(Bomb.defaults.SPEED);
        options.type = "bomb";

        super(options);
        
        // This rotation is to randomize which frame in the cycle the bomb starts on
        this.startRotation = Math.floor(Math.random() * 15);
        this.imageArr = GameUtil.bombFramesArr()
        while (this.startRotation > 0) {
            const frame = this.imageArr.shift()
            this.imageArr.push(frame)
            this.startRotation -= 1
        }

        this.damage = 10;
        this.angle = 0;
    }

    static get defaults() {
        return {
            COLOR: "white",
            RADIUS: 25,
            SPEED: 8
        };
    }

    draw(ctx) {
        // Numbers are to adjust the image correctly
        ctx.drawImage(this.imageArr[0], this.pos[0] - 45, this.pos[1] - 50, 92, 92)

        const frame = this.imageArr.shift()
        this.imageArr.push(frame)

        // MovingObject.prototype.draw.call(this, ctx);
    }
}

export default Bomb;