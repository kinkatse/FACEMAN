class Game {

    constructor(ctx) {
        this.video = document.getElementById("video");
        this.ctx = ctx;
        this.mode = "gameon";
        this.model;

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
            video: {width: 700, height: 450},
            audio: false,
        }).then( stream => {
            // Which returns us a promise which we then take the stream and set that to the video srcObject
            this.video.srcObject = stream;
        });
    }

    loadFaceModel() {
        // Waiting for the video to have a stream from the setupCamera function
        this.video.addEventListener("loadeddata", async () => {
            // Then loads the face detection API
            this.model = await faceLandmarksDetection.load(
                faceLandmarksDetection.SupportedPackages.mediapipeFacemesh
            );
        });
    }

    async detectFace() {
        // Here we grab the model we waited from the API for and grab its preditions
        // from estimatFaces function passing in the video element in order to detect those faces
        const prediction = await this.model.estimateFaces({
            input: document.querySelector('video')
        });
        this.ctx.drawImage(this.video, 0, 0, 700, 450);

        console.log(prediction);
    }

    // Load face models predictions before drawing which happens in the detectFace function
    draw() {
        // This is so that we don't error out before out video loads up
        if (this.model !== undefined) {
            this.detectFace();
        }
    }

}

export default Game;