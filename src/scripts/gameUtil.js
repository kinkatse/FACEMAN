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
    // Does x, y coordinate separately
    wrap: (coord, max) => {
        if (coord < 0) {
            // Gets a coordinate back into position of the game if negative
            return max - (coord % max);
        } else if (coord > max) {
            // Gets a coordinate back into position of the game if out of bounds
            return coord % max;
        } else {
            return coord;
        }
    }
};

export default GameUtil;