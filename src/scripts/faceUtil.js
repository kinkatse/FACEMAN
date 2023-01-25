const FaceUtil = {
    faceBoundsLeftX: (face) => face.boundingBox.topLeft[0],
    faceBoundsRightX: (face) => face.boundingBox.bottomRight[0],
    faceBoundsTopY: (face) => face.boundingBox.topLeft[1],
    faceBoundsBottomY: (face) => face.boundingBox.bottomRight[1],
    lipsUpper: (face) => FaceUtil.scaleCoord(face.annotations.lipsUpperOuter[5]),
    lipsLower: (face) => FaceUtil.scaleCoord(face.annotations.lipsLowerOuter[4]),
    scaleCoord: (pt) => {
        let x = pt[0];
        let y = pt[1];
        let z = pt[2];
        return [x, y];
        // debugger
        // let x = map(pt[0], 0,video.width, 0,width);
        // let y = map(pt[1], 0,video.height, 0,height);
        // return createVector(x, y);
    },
    mouthOpen: (face) => {
        const lipsUpper = FaceUtil.lipsUpper(face);
        const lipsLower = FaceUtil.lipsLower(face);
        // key into second element for y
        if (lipsLower[1] - lipsUpper[1] > 30 ) {
            return true;
        }
        return false;
    },
    getPixelMatrix: (imgData) => {
        // const mat = new Array(imgData.height);
        // for (let i = 0; i < imgData.height; i++) {
        //     mat[i] = new Array(imgData.weight);
        // }

        // for (let i = 0; i < imgData.data.length; i+=4) {
        //     const pixelColor = {
        //         r: imgData.data[i+0],
        //         g: imgData.data[i+1],
        //         b: imgData.data[i+2],
        //         a: imgData.data[i+3]
        //     }

        //     const pixelIdx = i/4;
        //     const x = pixelIdx%imgData.width;
        //     const y = Math.floor(pixelIdx/imgData.width);

        //     mat[y][x] = pixelColor
        // }
        // return mat;
    }
};

export default FaceUtil;