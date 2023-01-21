const GameUtil = {
    // Important to remember, this is not the position. This is the
    // direction that this object will move towards and the speed
    randomVec: (length) => {
        const degree = 2 * Math.PI * Math.random();
        const vector = [Math.sin(degree), Math.cos(degree)]
        return GameUtil.scale(vector, length);
    },
    scale: (vector, length) => {
        return [vector[0] * length, vector[1] * length];
    },
};

export default GameUtil;