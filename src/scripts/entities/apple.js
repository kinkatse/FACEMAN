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
        
        this.image = document.getElementById("apple-icon")
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
        // Numbers are to adjust the image correctly
        ctx.drawImage(this.image, this.pos[0] - 40, this.pos[1] - 45, 80, 80)
        // MovingObject.prototype.draw.call(this, ctx);
    }
}

export default Apple;