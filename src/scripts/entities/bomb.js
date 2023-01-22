import MovingObject from "./movingObject";
import GameUtil from "../gameUtil";
// import Game from "../game";

class Bomb extends MovingObject {
    constructor(options) {
        options = options || {};
        options.color = Bomb.defaults.COLOR;
        options.pos = options.pos;
        options.radius = Bomb.defaults.RADIUS;
        options.vel = options.vel || GameUtil.randomVec(Bomb.defaults.SPEED);
        options.type = "bomb";

        super(options);

        this.damage = 5;
    }

    static get defaults() {
        return {
            COLOR: "#505050",
            RADIUS: 25,
            SPEED: 4
        };
    }

    draw(ctx) {
        MovingObject.prototype.draw.call(this, ctx);

        // Drawing the wire of the bomb
        ctx.beginPath();
        ctx.lineWidth = 2;
        // Lol don't forget that I flipped the canvas so coords should be flipped too
        ctx.moveTo(this.pos[0], this.pos[1] - 20);
        ctx.bezierCurveTo(
            this.pos[0], this.pos[1] - 30,
            this.pos[0] + 10, this.pos[1] - 30,
            this.pos[0] + 10, this.pos[1] - 25
        );
        ctx.stroke();
        ctx.lineWidth = 1;
    }
}

export default Bomb;