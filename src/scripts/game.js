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
            setInterval(this.draw.bind(this), 20);
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

        // temporarily on for testing
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

        // My attempt to distort the face
        const sadFace = true
        if (sadFace && this.face !== undefined) {
            // debugger
            // for (let pt of this.face.annotations.lipsLowerOuter) {
            for (let i = 0; i < this.face.annotations.lipsLowerOuter.length; i++) {
                // let pts = this.face.annotations.lipsLowerOuter;
                // debugger
                this.face.annotations.lipsLowerOuter[i][0] -= 500;
                this.face.annotations.lipsLowerOuter[i][1] -= 500;
                // Is it required to draw it out first?
                this.ctx.drawImage(this.video, 0, 0, this.DIM_width, this.DIM_height);
                const imgData = this.ctx.getImageData(0,0,this.DIM_width, this.DIM_height)
                console.log(imgData)
                // Cool, now I can manipulate the ctx data points before it draws it out
                debugger
                // debugger
                // pts[i][0] -= 20;
                // pts[i][1] -= 20;
                // pt[2] -= 20;
            }
        }
    }

}

export default Game;