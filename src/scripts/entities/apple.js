import MovingObject from "./movingObject";
import GameUtil from "../gameUtil";

class Apple extends MovingObject {
    constructor(options) {
        options = options || {};
        options.color = Apple.defaults.COLOR;
        options.pos = options.pos
        options.radius = Apple.defaults.RADIUS;
        options.vel = options.vel || GameUtil.randomVec(Apple.defaults.SPEED);
        options.type = "apple";

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

export default Apple;