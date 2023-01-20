class Filter {

    constructor(options) {
        this.face = options.face;
        this.ctx = options.ctx;
        this.draw();
    }

    draw() {
        alert("oops, you didn't make a draw function for child class")
    }

}

export default Filter