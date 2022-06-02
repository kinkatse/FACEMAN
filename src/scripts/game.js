class Game {
    constructor(ctx) {
        this.video;
        this.model;
        this.ctx = ctx;

        this.createdNewInstance()
        this.setup()
    }

    createdNewInstance() {
        console.log('test')
    }

    setup() {
        // this.video = createCapture(VIDEO);
        // this.video.hide();
        // loadFaceModel();
        navigator.mediaDevices.getUserMedia({
            video: {width: 700, height: 450},
            audio: false,
        }).then((stream) => {
            video.srcObject = stream;
            video = document.getElementById("video");
            this.ctx.drawImage(video, 0, 0, 1000, 600);
        });
        // context.drawImage(video, 0, 0, 1000, 600);
        // video = document.getElementById("video");
        // this.ctx.drawImage(video, 0, 0, 1000, 600);
        // loadFaceModel();
    }

    loadFaceModel() {
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
}

export default Game;