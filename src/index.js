import Game from "./scripts/game"

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("canvas");
    canvasEl.height = 450;
    canvasEl.width = 700;
    const ctx = canvasEl.getContext("2d");
    // ctx.fillStyle = "grey";
    // ctx.fillRect(0, 0, 700, 450);

    const game = new Game(ctx);
})

// document.addEventListener("DOMContentLoaded", () => {
//     const canvasEl = document.getElementById("canvas");
//     canvasEl.height = 450;
//     canvasEl.width = 700;
//     const ctx = canvasEl.getContext("2d");
//     ctx.fillStyle = "grey";
//     ctx.fillRect(0, 0, 700, 450);

    // navigator.mediaDevices.getUserMedia({
    //     video: {width: 700, height: 450},
    //     audio: false,
    // }).then((stream) => {
    //     video.srcObject = stream;
    // });
    // ctx.drawImage(video, 0, 0, 1000, 600);
    // video = document.getElementById("video");
    // this.ctx.drawImage(video, 0, 0, 1000, 600);

    // const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
    // const detectorConfig = {
    // runtime: 'mediapipe', // or 'tfjs'
    // solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh',
    // }
    // const detector = await faceLandmarksDetection.createDetector(model, detectorConfig);
    // const faces = await detector.estimateFaces(image);

    // const game = new Game(ctx);
// })

// document.addEventListener("DOMContentLoaded", () => {
//     // let video = document.getElementById("video");
//     let video;
//     let model;
//     let canvas = document.getElementById("canvas");
//     let context = canvas.getContext("2d");
//     let mouthOpen = false;
//     let eyesClosed = false;
//     let face;
//     let firstFace = true;

//     const setUpCamera = () => {
//         navigator.mediaDevices.getUserMedia({
//             video: {width: 1000, height: 600},
//             audio: false,
//         }).then((stream) => {
//             video.srcObject = stream;
//         });
//         context.drawImage(video, 0, 0, 1000, 600);
//         video = document.getElementById("video");
//         loadFaceModel();
//     }

//     const loadFaceModel = async () => {
//         model = await faceLandmarksDetection.load(
//             faceLandmarksDetection.SupportedPackages.mediapipeFacemesh
//         );
//     }

//     // const setUpCamera = () => {
//     //     navigator.mediaDevices.getUserMedia({
//     //         video: {width: 1000, height: 600},
//     //         audio: false,
//     //     }).then((stream) => {
//     //         video.srcObject = stream;
//     //     });
//     // };

//     const detectFaces = async () => {
//         const facePrediction = await model.estimateFaces(video, false);
//         if (facePrediction.length === 0) {
//             return console.log("Error: no face detected");
//         }
//         if (facePrediction.length > 1) {
//             return console.log("Error: This app will only handle 1 person at a time");
//         }
//         console.log(facePrediction);
//         context.drawImage(video, 0, 0, 1000, 600);
//         facePrediction.forEach((pred) => {
//             context.beginPath();
//             context.lineWidth = "4";
//             context.strokeStyle = "blue";
//             if (pred.bottomRight[0] - pred.topLeft[0] - 40 < 125 || pred.bottomRight[1] - pred.topLeft[1] + 110 < 200) {
//                 return console.log("Error: Bring your face closer and keep it straight");
//             }
//             if (pred.bottomRight[0] - pred.topLeft[0] - 40 > 225 || pred.bottomRight[1] - pred.topLeft[1] + 110 > 300) {
//                 return console.log("Error: Back up a bit and keep your head straight");
//             }
//             context.rect (
//                 pred.topLeft[0] + 20,
//                 pred.topLeft[1] - 100,
//                 pred.bottomRight[0] - pred.topLeft[0] - 40,
//                 pred.bottomRight[1] - pred.topLeft[1] + 110
//             );
//             context.stroke();

//             context.fillStyle = "red";
//             pred.landmarks.forEach((landmark) => {
//                 context.fillRect(landmark[0], landmark[1], 5, 5);
//             });
//         });
//     }

//     const drawFace = async () => {
//         // const facePrediction = await model.estimateFaces(video, false);
//         debugger
//         // if (video.loadedmetadata && model !== undefined) {
//             detectFace();
//         // }
//         debugger
//         if (face !== undefined) {
//             context.drawImage(video, 0, 0, 1000, 600);
//             if (firstFace) {
//                 console.log(face);
//                 firstFace = false;
//             }
//             fill(255);
//             noStroke();
//             for (let pt of face.scaledMesh) {
//                 pt = scalePoint(pt);
//                 circle(pt.x, pt.y, 3);
//             }
//             fill(0,150,255, 100);
//             noStroke();
//             beginShape();
//             for (pt of face.annotations.silhouette) {
//                 pt = scalePoint(pt);
//                 vertex(pt.x, pt.y);
//             }
//             endShape(CLOSE);
//         }
//     }

//     const scalePoint = (pt) => {
//         let x = map(pt[0], 0,video.width, 0,width);
//         let y = map(pt[1], 0,video.height, 0,height);
//         return createVector(x, y);
//     }

//     const detectFace = async () => {
//         debugger
//         const facePredictions = await model.estimateFaces({
//             input: document.querySelector('video')
//         });
//         console.log(facePredictions);
//         debugger
//         if (facePredictions.length === 0) {
//             face = undefined;
//             return console.log("Error: no face detected");
//         } else if (facePredictions.length > 1) {
//             face = undefined;
//             return console.log("Error: This app will only handle 1 person at a time");
//         } else {
//             face = facePredictions[0];
//         }
//         debugger
//     }

//     setUpCamera();
//     video.addEventListener("loadeddata", async () => {
//         model = await faceLandmarksDetection.load(
//             faceLandmarksDetection.SupportedPackages.mediapipeFacemesh
//         );
//         // detectFace();
//         drawFace();
//         // setInterval(detectFace, 50);
//     })
// })