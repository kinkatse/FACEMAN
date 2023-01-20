import MovingObject from "../entities/movingObject.js"

class Filter {

    constructor(options) {
        // super(); // important for not error since this is considered a moving object

        this.face = options.face;
        this.ctx = options.ctx;
        this.draw();
    }

    draw() {
        alert("oops, you didn't make a draw function for child class")
    }

}

export default Filter