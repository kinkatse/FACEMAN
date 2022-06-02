class Game {
    constructor(ctx) {
        this.video = document.getElementById("video");
        this.model;
        // this.model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;

        this.createdNewInstance()
        this.setupCamera(ctx)
        // this.draw()
    }

    createdNewInstance() {
        console.log('test')
    }

    setupCamera(ctx) {
        // this.video = createCapture(VIDEO);
        // this.video.hide();
        // loadFaceModel();
        navigator.mediaDevices.getUserMedia({
            video: {width: 700, height: 450},
            audio: false,
        }).then( stream => {
            this.video.srcObject = stream;
            // video = document.getElementById("video");
            // ctx.drawImage(video, 0, 0, 1000, 600);
            // ctx.drawImage(this.video.srcObject, 0, 0, 700, 450);
        });
        // this.video = document.getElementById("video");
        // ctx.drawImage(this.video, 0, 0, 1000, 600);
        // loadFaceModel();

        // this.video.addEventListener("loadeddata", async () => {
        //     this.model = await faceLandmarksDetection.load(
        //         faceLandmarksDetection.SupportedPackages.mediapipeFacemesh
        //     );
        //     this.detectFace()
        // })

        this.loadFaceModel()
    }

    loadFaceModel() {

        this.video.addEventListener("loadeddata", async () => {
            this.model = await faceLandmarksDetection.load(
                faceLandmarksDetection.SupportedPackages.mediapipeFacemesh
            );
            this.detectFace()
        })



        // this.model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
        // const detectorConfig = {
        //     runtime: 'mediapipe',
        //     solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh',
        // }
        // const detector = await faceLandmarksDetection.createDetector(model, detectorConfig);
        // const faces = await detector.estimateFaces(image);
        // this.model = await faceLandmarksDetection.load(
        //     faceLandmarksDetection.SupportedPackages.mediapipeFacemesh
        // );
    }

    async detectFace() {
        const prediction = await this.model.estimateFaces({
            input: document.querySelector('video')
        })

        // debugger
        // console.log(prediction)
    }
}

export default Game;