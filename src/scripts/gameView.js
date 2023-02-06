import ScanMask from "./filters/scanMask.js";
import HurtBox from "./filters/hurtBox.js";
import Game from "./game.js";

class GameView {

    constructor(ctx, video) {
        // video, face detection, canvas and game set up
        this.video = video;
        this.videoFrames = [];
        this.ctx = ctx;
        this.mode = "justfilters";
        this.model;
        this.face;
        this.DIM_width = 700;
        this.DIM_height = 450;
        this.game = null;

        // filters
        this.faceMaskDots = false;
        this.hitBox = false;
        this.instructionsPage = ["bomb"]
        this.instructions = true;
        setTimeout(() => this.drawInstructions(), 1000)

        // runing all event listeners
        this.runEventListeners();

        // running functions that start the application
        this.setupCamera();
        this.loadFaceModel();
        // Sets interval to loop the draw function (which loses context)
        // setInterval(this.draw.bind(this), 1);
        requestAnimationFrame(this.animate.bind(this))
    }

    runEventListeners() {
        const start = document.getElementById("start-button");
        start.addEventListener("click", () => {
            // set mode to gameon and create game instance
            this.mode = "gameon";
            this.game = new Game(this.face);
        })

        // Button for turning on the scan mask on or off
        const scanFilter = document.getElementById("scan-filter");
        scanFilter.addEventListener("click", () => this.faceMaskDots = !this.faceMaskDots)

        // Button for turning on the hurtBox mask on or off
        const hurtBoxFilter = document.getElementById("hurtbox-filter");
        hurtBoxFilter.addEventListener("click", () => this.hurtBox = !this.hurtBox)

        const instructions = document.getElementById("instructions");
        instructions.addEventListener("click", () => this.instructions = !this.instructions)

        // const backButton = document.querySelector(".back")
        // backButton.addEventListener("click", () => {
        //     this.goBackPage()
        // })

        // const nextButton = document.querySelector(".next")
        // nextButton.addEventListener("click", () => {
        //     this.goNextPage()
        // })
    }

    setupCamera() {
        // Using the mediaDevices API to grab the video
        navigator.mediaDevices.getUserMedia({
            video: {width: this.DIM_width, height: this.DIM_height},
            audio: false,
        }).then( stream => {
            // Which returns us a promise which we then take the stream and set that to the video srcObject
            this.video.srcObject = stream;
        });
    }

    loadFaceModel() {
        // Waiting for the video to have a stream from the setupCamera function
        this.video.addEventListener("loadeddata", async () => {
            // Then load up the face detection API
            this.model = await faceLandmarksDetection.load(
                faceLandmarksDetection.SupportedPackages.mediapipeFacemesh
            );
            // Change loading elements to be hidden once face api loads in
            const loadingEls = document.getElementsByClassName("loading");
            for (let el of loadingEls) {
                el.style.display = "none";
            }
        });
    }

    async detectFace() {
        // Here we grab the model we waited from the API for and grab its preditions
        // from estimateFaces function passing in the video element in order to detect those faces
        const facePredictions = await this.model.estimateFaces({
            input: this.video
        });

        // Below are errors to restrict user
        if (facePredictions.length === 0) {
            this.face = undefined;
            console.log("Error: No face detected")
        } else if (facePredictions.length > 1) {
            this.face = undefined;
            console.log("Error: This app is designed for 1 person at a time")
        } else {
            // Set the face instance variable to the first face prediction
            this.face = facePredictions[0];
        }

    }

    animate() {
        this.draw()
        requestAnimationFrame(this.animate.bind(this))
    }

    grabPrevVideoFrame() {
        // Using video frame object to grab a specific frame and push into arrray
        const frame = new VideoFrame(this.video);
        this.videoFrames.push(frame);
        // We limit this by how delayed we want it, and in this sense, the video will now be delayed
        // by 4 frames. We have to shift them out once it reaches the max, and VideoFrame objects
        // require us to .close() them after we don't use them to reduce lag
        if (this.videoFrames.length > 4) this.videoFrames.shift().close();
        return this.videoFrames[0];
    }

    // Load face models predictions before drawing which happens in the detectFace function
    draw() {
        // This is so that we don't error out before out video loads up
        if (this.model !== undefined) {
            this.detectFace();
            if (this.mode === "gameon") {
                this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
                this.ctx.drawImage(this.grabPrevVideoFrame(), 0, 0, this.DIM_width, this.DIM_height);
                this.drawFilters();
                this.game.draw(this.ctx, this.face);
                this.game.update();
                // Testing bombs spawn randomly
                // this.game.remove();
                // this.game.addBombs();
                // console.log(this.game.bombs);
            } else {
                this.ctx.drawImage(this.video, 0, 0, this.DIM_width, this.DIM_height);
                this.drawFilters();
            }
        }
        // Logic for error handling when face is too far or too close
        if (this.face !== undefined) {
            if (this.face.boundingBox.bottomRight[0] - this.face.boundingBox.topLeft[0] - 40 < 100
                || this.face.boundingBox.bottomRight[1] - this.face.boundingBox.topLeft[1] + 110 < 175) {
                    console.log("Error: Bring your face closer and keep it straight")
            }
             else if (this.face.boundingBox.bottomRight[0] - this.face.boundingBox.topLeft[0] - 40 > 300
                || this.face.boundingBox.bottomRight[1] - this.face.boundingBox.topLeft[1] + 110 > 375) {
                    console.log("Error: Back up a bit and keep your head straight")
            }
        }
    }

    // b a c g

    goBackPage() {
        let length = this.instructionsPage.length
        if (length === 1) {
            // Do nothing
        } else {
            // Remove last page we were on by giving it display none
            const oldText = this.instructionsPage.pop()
            const oldTextEls = document.getElementsByClassName(`${oldText}-text`);
            // converting HTMLCollection into an Array
            const oldTextArr = Array.prototype.slice.call(oldTextEls)
            oldTextArr.forEach(el => {
                el.style.display = "none";
            })
            // update length, otherwise its using old length before pop
            length = this.instructionsPage.length

            // Include previous page by adding display block
            const newText = this.instructionsPage[length - 1]
            const newTextEls = document.getElementsByClassName(`${newText}-text`);
            const newTextArr = Array.prototype.slice.call(newTextEls)
            newTextArr.forEach(el => {
                el.style.display = "block";
            })
        }
    }

    goNextPage() {
        const length = this.instructionsPage.length
        if (length === 4) {
            // Do nothing
        } else {
            const oldText = this.instructionsPage[length - 1]
            const oldTextEls = document.getElementsByClassName(`${oldText}-text`);
            const oldTextArr = Array.prototype.slice.call(oldTextEls)
            oldTextArr.forEach(el => {
                el.style.display = "none";
            })
            
            // Adding back the page items
            let nextPageText = ""
            if (this.instructionsPage[length - 1] === "bomb") {
                nextPageText = "apple"
            } else if (this.instructionsPage[length - 1] === "apple") {
                nextPageText = "coin"
            } else if (this.instructionsPage[length - 1] === "coin") {
                nextPageText = "ghost"
            }
            this.instructionsPage.push(nextPageText)

            const newTextEls = document.getElementsByClassName(`${nextPageText}-text`);
            const newTextArr = Array.prototype.slice.call(newTextEls)
            newTextArr.forEach(el => {
                el.style.display = "block";
            })
        }
    }

    drawInstructions() {
        if (this.instructions) {
            // Instructions canvas
            const instructionsEl = document.getElementById("instructions-canvas");
            instructionsEl.style.display = "inline";
            instructionsEl.style.position = "absolute";
            instructionsEl.height = 450;
            instructionsEl.width = 700;
            const instructionsCtx = instructionsEl.getContext("2d");

            instructionsCtx.fillStyle = "rgb(60, 179, 113, 0.8)";
            instructionsCtx.strokeStyle = "rgb(10, 129, 63, 0.5)";

            instructionsCtx.beginPath()
            instructionsCtx.rect(100, 50, 500, 350)
            instructionsCtx.fill()
            instructionsCtx.stroke()

            const backButton = document.querySelector(".back")
            backButton.addEventListener("click", () => {
                this.goBackPage()
            })

            const nextButton = document.querySelector(".next")
            nextButton.addEventListener("click", () => {
                this.goNextPage()
            })

            // instructionsCtx.fillStyle = "black";
            // instructionsCtx.font = "bold 18px serif";
            // instructionsCtx.strokeText("Hello world", 50, 100);
            // instructionsCtx.fillText("Hello! Welcome to FACE-MAN", 120, 90);
            // instructionsCtx.fillText("This is a face detection game which uses your video", 120, 115);
            // instructionsCtx.fillText("feed to display obstacles and your face as a hurt box", 120, 140);
            // instructionsCtx.fillText("After you enable the camera, you can start the game", 120, 165);
            // instructionsCtx.fillText("There are 4 entities to be aware of in this game", 120, 190);
        } else {
            // display none
            // make the canvas always there, just hidden and none hidden when this function runs
        }
    }

    // When filters are clicked, they are revealed here
    drawFilters() {

        if (this.faceMaskDots && this.face !== undefined) {
            new ScanMask({
                face: this.face,
                ctx: this.ctx,
            });
        }

        if (this.hurtBox && this.face !== undefined) {
            new HurtBox({
                face: this.face,
                ctx: this.ctx,
            });
        }

        const pacmanFilter = false
        if (pacmanFilter && this.face !== undefined) {
            new PacMan({
                face: this.face,
                ctx: this.ctx
            });
        }

        const kirbyFilter = false
        if (kirbyFilter && this.face !== undefined) {
            new Kirby({
                face: this.face,
                ctx: this.ctx
            });
        }

        const pikachuFilter = false
        if (pikachuFilter && this.face !== undefined) {
            new Pikachu({
                face: this.face,
                ctx: this.ctx
            });
        }

        const prettyFilter = false
        if (prettyFilter && this.face !== undefined) {
            new Pretty({
                face: this.face,
                ctx: this.ctx
            });
        }

        const mustacheFilter = false
        if (mustacheFilter && this.face !== undefined) {
            new Mustache({
                face: this.face,
                ctx: this.ctx
            });
        }

        const glassesFilter = false
        if (glassesFilter && this.face !== undefined) {
            new Glasses({
                face: this.face,
                ctx: this.ctx
            });
        }

        this.drawInstructions()

        // My attempt to distort the face
        // const sadFace = true
        // if (sadFace && this.face !== undefined) {
        //     for (let i = 0; i < this.face.annotations.lipsLowerOuter.length; i++) {
        //         // I manipulated the face object from the API but it doesn't correlate to the video or canvas
        //         // Instead of just subtracting two points, I probably need to do some math to figure out
        //         // how to distort a section of the face
        //         this.face.annotations.lipsLowerOuter[i][0] -= 50;
        //         this.face.annotations.lipsLowerOuter[i][1] -= 50;
        //         // I could do one of two things:
        //         // Manipulate the video before I draw the ctx
        //         // or manipulate the ctx after I drew it

        //         // Method 2 attempt
        //         this.ctx.drawImage(this.video, 0, 0, this.DIM_width, this.DIM_height);
        //         const imgData = this.ctx.getImageData(0,0,this.DIM_width, this.DIM_height)
        //         console.log(imgData)
        //         const mat = this.getPixelMatrix(imgData);
        //         console.log(mat)
        //         // Cool, now I can manipulate the ctx data points and draw it again
        //     }
        // }
    }

}

export default GameView;