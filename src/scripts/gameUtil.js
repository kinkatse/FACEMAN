const GameUtil = {
    faceBoundsLeftX: (face) => face.boundingBox.topLeft[0],
    faceBoundsRightX: (face) => face.boundingBox.bottomRight[0],
    faceBoundsTopY: (face) => face.boundingBox.topLeft[1],
    faceBoundsBottomY: (face) => face.boundingBox.bottomRight[1]
};

export default GameUtil;