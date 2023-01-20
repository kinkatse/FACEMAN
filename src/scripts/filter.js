class Filter {

    constructor(options) {
        this.face = options.face;
        this.ctx = options.ctx;
        // this.video = options.video;
        // this.DIM_X = options.DIM_X;
        // this.DIM_Y = options.DIM_Y;
        this.draw();
    }

    draw() {
        alert("oops, you didn't make a draw function for child class")
    }

}

export default Filter