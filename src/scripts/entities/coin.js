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
        MovingObject.prototype.draw.call(this, ctx);
    }
}

export default Coin;