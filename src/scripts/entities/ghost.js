import MovingObject from "./movingObject";
import GameUtil from "../gameUtil";

class Ghost extends MovingObject {
    constructor(options) {
        options = options || {};
        options.color = Ghost.defaults.COLOR;
        options.pos = options.pos;
        options.radius = Ghost.defaults.RADIUS;
        options.vel = options.vel || GameUtil.randomVec(Ghost.defaults.SPEED);
        options.type = "ghost";

        super(options);

        this.image = document.getElementById("ghost-icon")
        this.isWrappable = false;
        this.damage = 30;
    }

    static get defaults() {
        return {
            COLOR: "rgba(80, 80, 80, 0.3)",
            RADIUS: 70,
            SPEED: 2
        };
    }

    draw(ctx) {
        // Numbers are to adjust the image correctly
        ctx.drawImage(this.image, this.pos[0] - 102, this.pos[1] - 98, 200, 200)
        // MovingObject.prototype.draw.call(this, ctx);
    }
}

export default Ghost;