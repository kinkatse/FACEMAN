const GameUtil = {
    // Important to remember, this is not the position. This is the
    // direction that this object will move towards and the speed
    randomVec: (length) => {
        const degree = 2 * Math.PI * Math.random();
        const vector = [Math.sin(degree), Math.cos(degree)]
        return GameUtil.scale(vector, length);
    },
    // Scale the vector with the length
    scale: (vector, length) => {
        return [vector[0] * length, vector[1] * length];
    },
    // Wraps an object to the other side of canvas if it hits a boundary
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
    },
    // Returns distance between two positions, but since this is a vector
    // we do pythagorean theorem to get a single distance and not a position
    dist: (pos1, pos2) => {
        const distX = pos1[0] - pos2[0];
        const distY = pos1[1] - pos2[1];
        const squaredX = Math.pow(distX, 2);
        const squaredY = Math.pow(distY, 2);
        const dist = Math.sqrt(squaredX + squaredY)
        return dist;
    },
    // Function which adds a class to the canvas at the moment a bomb hits
    // the player. The class will then apply CSS which makes the screen 'shake'
    // and then removes the class for when this function is ran next time
    // We also use a queue to determine which screenshake effect to show
    // There are 4 different ones and we then push it to the back of the queue
    screenShakeEffect: (queue) => {
        const canvasContainer = document.querySelector('.canvas-container')
        canvasContainer.classList.add(`screen-shake${queue[0]}`);
        // console.log(`screen-shake${queue[0]}`)
        setTimeout(() => {
            canvasContainer.classList.remove(`screen-shake${queue[0]}`);
            queue.push(queue.shift());
            // console.log(queue)
        }, 100)
    }
};

export default GameUtil;