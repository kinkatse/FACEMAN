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
        
        this.image = document.getElementById("bomb-icon")
        this.damage = 10;
        this.angle = 0;
    }

    static get defaults() {
        return {
            COLOR: "white",
            RADIUS: 25,
            SPEED: 5
        };
    }

    draw(ctx) {
        // Numbers are to adjust the image correctly
        // MovingObject.prototype.draw.call(this, ctx);
        ctx.drawImage(this.image, this.pos[0] - 45, this.pos[1] - 50, 92, 92)

        // const x = this.pos[0] - 45
        // const y = this.pos[1] - 50
        // ctx.save();
        // ctx.translate(x,y);
        // ctx.rotate(this.angle += Math.PI);
        // ctx.translate(-x,-y); 
        // ctx.drawImage(this.image, x, y, 92, 92)
        // // ctx.rotate(Math.PI);
        // ctx.restore();

        // Drawing the wire of the bomb
        // ctx.strokeStyle = 'black';
        // ctx.beginPath();
        // ctx.lineWidth = 2;
        // // Lol don't forget that I flipped the canvas so coords should be flipped too
        // ctx.moveTo(this.pos[0], this.pos[1] - 20);
        // ctx.bezierCurveTo(
        //     this.pos[0], this.pos[1] - 30,
        //     this.pos[0] + 10, this.pos[1] - 30,
        //     this.pos[0] + 10, this.pos[1] - 25
        // );
        // ctx.stroke();
    }
}

export default Bomb;