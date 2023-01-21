import MovingObject from "./movingObject";

class Bomb extends MovingObject {
    constructor(options) {
        options = options || {};
        options.color = Bomb.defaults.COLOR;
        options.pos = options.pos
        options.radius = Bomb.defaults.RADIUS;
        // options.vel = options.vel || Util.randomVec(Bomb.defaults.SPEED);

        super(options);
    }

    static get defaults() {
        return {
            COLOR: "#505050",
            RADIUS: 25,
            SPEED: 4
        };
    }
}

export default Bomb;