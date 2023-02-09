const bombArr = [1,2,3,4]
const coinArr = [1,2,3]

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
        setTimeout(() => {
            canvasContainer.classList.remove(`screen-shake${queue[0]}`);
            queue.push(queue.shift());
        }, 100)
    },
    coinFramesArr: () => {
        const frame1 = document.getElementById("coin-icon-1")
        const frame2 = document.getElementById("coin-icon-2")
        const frame3 = document.getElementById("coin-icon-3")
        const frame4 = document.getElementById("coin-icon-4")
        const frame5 = document.getElementById("coin-icon-5")
        const frame6 = document.getElementById("coin-icon-6")
        const frame7 = document.getElementById("coin-icon-7")
        return [frame1, frame2, frame3, frame4, frame5, frame6, frame7]
    },
    bombFramesArr: () => {
        const frame1 = document.getElementById("bomb-icon-1")
        const frame2 = document.getElementById("bomb-icon-2")
        const frame3 = document.getElementById("bomb-icon-3")
        const frame4 = document.getElementById("bomb-icon-4")
        const frame5 = document.getElementById("bomb-icon-5")
        const frame6 = document.getElementById("bomb-icon-6")
        const frame7 = document.getElementById("bomb-icon-7")
        const frame8 = document.getElementById("bomb-icon-8")
        const frame9 = document.getElementById("bomb-icon-9")
        const frame10 = document.getElementById("bomb-icon-10")
        const frame11 = document.getElementById("bomb-icon-11")
        const frame12 = document.getElementById("bomb-icon-12")
        const frame13 = document.getElementById("bomb-icon-13")
        const frame14 = document.getElementById("bomb-icon-14")
        const frame15 = document.getElementById("bomb-icon-15")
        const frame16 = document.getElementById("bomb-icon-16")
        return [
            frame1, frame2, frame3, frame4,
            frame5, frame6, frame7, frame8,
            frame9, frame10, frame11, frame12,
            frame13, frame14, frame15, frame16
        ]
    },
    playBackgroundMusic: () => {
        // const backgroundMusic = document.getElementById('background-music')
        // backgroundMusic.play()
        // let setTimerCount = 30200
        // const intervalId = setInterval(() => {
        //     setTimerCount += 200
        //     backgroundMusic.play()
        // }, setTimerCount)
        // return intervalId
    },
    stopBackgroundMusic: (intervalId) => {
        // const backgroundMusic = document.getElementById('background-music')
        // backgroundMusic.pause()
        // clearInterval(intervalId)
    },
    playBombSound: () => {
        let bombSound = document.getElementById(`bomb-audio-${bombArr[0]}`)
        bombSound.play()
        bombArr.push(bombArr.shift())
    },
    playGhostSound: () => {
        let ghostSound = document.getElementById(`ghost-damage-audio`)
        ghostSound.play()
    },
    playCoinSound: () => {
        let coinSound = document.getElementById(`coin-audio-${coinArr[0]}`)
        coinSound.play()
        coinArr.push(coinArr.shift())
    },
    playAppleSound: () => {
        let appleSound = document.getElementById(`eat-apple-audio`)
        appleSound.play()
    }
};

export default GameUtil;