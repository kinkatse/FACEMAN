class Game {

    constructor(ctx, video) {
        this.video = video
        this.ctx = ctx;
        this.mode = "gameon";
        this.model;
        this.face;
        this.DIM_width = 700;
        this.DIM_height = 450;

        // Checks to see if game is playing to set up camera and load face models
        if (this.mode === "gameon"){
            this.setupCamera();
            this.loadFaceModel();
            // Sets interval to loop the draw function (which loses context)
            // setInterval(this.draw.bind(this), 20);
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

    scaleCoord(pt) {
        let x = pt[0];
        let y = pt[1];
        let z = pt[2];
        return [x, y];
        // debugger
        // let x = map(pt[0], 0,video.width, 0,width);
        // let y = map(pt[1], 0,video.height, 0,height);
        // return createVector(x, y);
    }

    // getPixelMatrix(imgData) {
    //     const mat = new Array(imgData.height);
    //     for (let i = 0; i < imgData.height; i++) {
    //         mat[i] = new Array(imgData.weight);
    //     }

    //     for (let i = 0; i < imgData.data.length; i+=4) {
    //         const pixelColor = {
    //             r: imgData.data[i+0],
    //             g: imgData.data[i+1],
    //             b: imgData.data[i+2],
    //             a: imgData.data[i+3]
    //         }

    //         const pixelIdx = i/4;
    //         const x = pixelIdx%imgData.width;
    //         const y = Math.floor(pixelIdx/imgData.width);

    //         mat[y][x] = pixelColor
    //     }
    //     return mat;
    // }

    // Load face models predictions before drawing which happens in the detectFace function
    draw() {
        // This is so that we don't error out before out video loads up
        if (this.model !== undefined) {
            this.detectFace();
            this.ctx.drawImage(this.video, 0, 0, this.DIM_width, this.DIM_height);
            // console.log(this.face)
            // debugger
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
            // Making blue mask around face
            this.ctx.strokeStyle = 'rgba(0, 150, 255, 0.5)';
            this.ctx.beginPath();
            let startpt = this.face.annotations.silhouette[0];
            startpt = this.scaleCoord(startpt);
            for (let pt of this.face.annotations.silhouette) {
                pt = this.scaleCoord(pt);
                this.ctx.lineTo(...pt)
            }
            // This is to close the shape
            this.ctx.lineTo(...startpt);
            this.ctx.fillStyle = 'rgba(0, 150, 255, 0.3)';
            this.ctx.fill();
            this.ctx.stroke();
            
            // Making face dots for each facial feature
            for (let pt of this.face.scaledMesh) {
                this.ctx.beginPath();
                this.ctx.strokeStyle = "black";
                pt = this.scaleCoord(pt);
                let x = pt[0];
                let y = pt[1];
                this.ctx.arc(x, y, 0.5, 0, 2 * Math.PI);
                this.ctx.fillStyle = "black";
                this.ctx.fill();
                this.ctx.stroke();
            }
        }
    }

}

export default Game;