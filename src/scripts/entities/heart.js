import MovingObject from "./movingObject";
import GameUtil from "../gameUtil";

class Heart extends MovingObject {
    constructor(options) {
        options = options || {};
        options.color = Bomb.defaults.COLOR;
        options.pos = options.pos
        options.radius = Bomb.defaults.RADIUS;
        options.vel = options.vel || GameUtil.randomVec(Bomb.defaults.SPEED);

        super(options);

        this.amount = 10;
    }

    static get defaults() {
        return {
            COLOR: "red",
            RADIUS: 20,
            SPEED: 0
        };
    }

    draw(ctx) {
        MovingObject.prototype.draw.call(this, ctx);
    }
}

export default Heart;