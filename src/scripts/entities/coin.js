import MovingObject from "./movingObject";

class Coin extends MovingObject {
    constructor(options) {
        options = options || {};
        options.color = Bomb.defaults.COLOR;
        options.pos = options.pos
        options.radius = Bomb.defaults.RADIUS;
        options.vel = options.vel || GameUtil.randomVec(Bomb.defaults.SPEED);

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