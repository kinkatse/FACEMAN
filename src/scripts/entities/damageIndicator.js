// Does similar things to the MovingObject class but is not a MovingObject
// and does not need all it's functions, and its just for visual purposes

class DamageIndicator {
    constructor(pos, game) {
        this.pos = pos;
        this.game = game;
        this.radius = 3;
        this.opacity = 0.8;
    }

    draw(ctx) {
        ctx.fillStyle = `rgba(245, 70, 30, ${this.opacity -= 0.1})`;
    
        ctx.beginPath();
        ctx.arc(
            this.pos[0], this.pos[1], this.radius += 4, 0, 2 * Math.PI, true
        );
        ctx.fill();
        if (this.opacity === 0) {
            this.game.areaHit.shift()
        }
    }

}

export default DamageIndicator;