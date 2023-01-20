import ScanMask from "./filters/scanMask";

class Game {

    constructor(ctx, video) {
        this.video = video;
        this.videoFrames = [];
        this.ctx = ctx;
        this.mode = "gameon";
        this.model;
        this.face;
        this.DIM_width = 700;
        this.DIM_height = 450;
        this.filterOn = false;

        // Checks to see if game is playing to set up camera and load face models
        if (this.mode === "gameon"){
            this.setupCamera();
            this.loadFaceModel();
            // Sets interval to loop the draw function (which loses context)
            // setInterval(this.draw.bind(this), 1);
            requestAnimationFrame(this.animate.bind(this))
        }
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

    grabPrevCtx() {
        const frame = new VideoFrame(this.video);
        this.videoFrames.push(frame);
        if (this.videoFrames.length > 4) this.videoFrames.shift().close();
        return this.videoFrames[0];
    }

    // Load face models predictions before drawing which happens in the detectFace function
    draw() {
        // This is so that we don't error out before out video loads up
        if (this.model !== undefined) {
            this.detectFace();
            if (this.filterOn === false) {
                this.ctx.drawImage(this.video, 0, 0, this.DIM_width, this.DIM_height);
            } else {
                // this.ctx.clearRect(0, 0, 700, 450)
                this.ctx.drawImage(this.grabPrevCtx(), 0, 0, this.DIM_width, this.DIM_height);
            }
        }
        // Logic for error handling when face is too far or too close
        if (this.face !== undefined) {
            if (this.face.boundingBox.bottomRight[0] - this.face.boundingBox.topLeft[0] - 40 < 100 || this.face.boundingBox.bottomRight[1] - this.face.boundingBox.topLeft[1] + 110 < 175) {
                console.log("Error: Bring your face closer and keep it straight")
            }
             else if (this.face.boundingBox.bottomRight[0] - this.face.boundingBox.topLeft[0] - 40 > 300 || this.face.boundingBox.bottomRight[1] - this.face.boundingBox.topLeft[1] + 110 > 375) {
                console.log("Error: Back up a bit and keep your head straight")
            }
        }
    
        // When filters are clicked, they are revealed here

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

        const faceMaskDots = true
        if (faceMaskDots && this.face !== undefined) {
            this.filterOn = true;
            new ScanMask({
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
    }

}

export default Game;