import ScanMask from "./filters/scanMask.js";
import HurtBox from "./filters/hurtBox.js";
import Game from "./game.js";
import GameUtil from "./gameUtil.js";

class GameView {

    constructor(ctx, video) {
        this.video = video;
        this.videoFrames = [];
        this.ctx = ctx;
        this.mode = "justfilters";
        this.model;
        this.face;
        this.DIM_width = 700;
        this.DIM_height = 450;
        this.game = null;

        this.faceMaskDots = false;
        this.hitBox = false;

        this.instructionsPage = ["general"]
        this.instructions = false;
        this.imageArr = GameUtil.coinFramesArr()
        this.intervalId = null;
        this.loadInstructions();
        this.musicIntervalId = null;
        this.mute = false;

        this.timerId = null;
        this.timerElement = document.getElementById("timer")
        this.timer = 0;

        this.runEventListeners();
        this.setupCamera();
        this.loadFaceModel();
        this.requestId = requestAnimationFrame(this.animate.bind(this))

        this.warningNoFace = document.querySelector(".no-face")
        this.warningMany = document.querySelector(".too-many")
        this.warningFar = document.querySelector(".too-far")
        this.warningClose = document.querySelector(".too-close")
    }

    runEventListeners() {
        const start = document.getElementById("start-button");
        start.addEventListener("click", () => {
            this.mode = "gameon";
            this.timer = 0;
            this.timerElement.innerHTML = `00:00`
            clearInterval(this.timerId)
            this.setTimer();
            this.musicIntervalId = GameUtil.playBackgroundMusic()
            this.game = new Game(this.face, this.timer);
            start.innerHTML = "Restart"

            const score = document.getElementById("score");
            score.innerHTML = 0;

            const level = document.getElementById("level");
            level.style.display = "block"
            level.innerHTML = "Level: Beginner";
            level.style.color = "rgb(29, 251, 255)"

            const instructions = document.getElementById("instructions");
            instructions.style.display = "none"
            this.instructions = false;

            const gameoverEl = document.getElementById("gameover-elements")

            gameoverEl.style.display = "none"
            const gameoverText = document.querySelector(".gameover-text")
            gameoverText.classList.remove("gameover-active")
        })

        const scanFilter = document.getElementById("scan-filter");
        scanFilter.addEventListener("click", () => this.faceMaskDots = !this.faceMaskDots)

        const hurtBoxFilter = document.getElementById("hurtbox-filter");
        hurtBoxFilter.addEventListener("click", () => this.hurtBox = !this.hurtBox)

        const instructions = document.getElementById("instructions");
        instructions.addEventListener("click", () => this.instructions = !this.instructions)

        const mute = document.getElementById("mute");
        mute.addEventListener("click", () => {
            if (mute.innerHTML === "Mute") { mute.innerHTML = "Unmute" }
            else { mute.innerHTML = "Mute" }
            this.mute = !this.mute
        })
    }

    setupCamera() {
        // Using the mediaDevices API to grab the video
        navigator.mediaDevices.getUserMedia({
            video: {width: this.DIM_width, height: this.DIM_height},
            audio: false,
        }).then( stream => {
            // Which returns us a promise which we then take the stream and set that to the video srcObject
            this.video.srcObject = stream;
            this.instructions = true;
        });
    }

    loadFaceModel() {
        // Waiting for the video to have a stream from the setupCamera function
        this.video.addEventListener("loadeddata", async () => {
            // Then load up the face detection API
            this.model = await faceLandmarksDetection.load(
                faceLandmarksDetection.SupportedPackages.mediapipeFacemesh
            );
            // Change loading elements to be hidden once face api loads in
            const loadingEls = document.getElementsByClassName("loading");
            for (let el of loadingEls) {
                el.style.display = "none";
            }
        });
    }

    async detectFace() {
        // Here we grab the model we waited from the API for and grab its preditions
        // from estimateFaces function passing in the video element in order to detect those faces
        const facePredictions = await this.model.estimateFaces({
            input: this.video
        });

        // Below are errors to restrict user
        if (facePredictions.length === 0) {
            this.warningFar.style.display = "none"
            this.warningClose.style.display = "none"
            this.warningNoFace.style.display = "block"
            this.face = undefined;
        } else if (facePredictions.length > 1) {
            this.warningFar.style.display = "none"
            this.warningClose.style.display = "none"
            this.warningMany.style.display = "block"
            this.face = undefined;
        } else {
            this.warningNoFace.style.display = "none"
            this.warningMany.style.display = "none"
            // Set the face instance variable to the first face prediction
            this.face = facePredictions[0];
        }


    }

    animate() {
        this.draw()
        requestAnimationFrame(this.animate.bind(this))
    }

    grabPrevVideoFrame() {
        // Using video frame object to grab a specific frame and push into arrray
        const frame = new VideoFrame(this.video);
        this.videoFrames.push(frame);
        // We limit this by how delayed we want it, and in this sense, the video will now be delayed
        // by 4 frames. We have to shift them out once it reaches the max, and VideoFrame objects
        // require us to .close() them after we don't use them to reduce lag
        if (this.videoFrames.length > 4) this.videoFrames.shift().close();
        return this.videoFrames[0];
    }

    // Load face models predictions before drawing which happens in the detectFace function
    draw() {
        // This is so that we don't error out before out video loads up
        if (this.model !== undefined) {
            this.detectFace();
            if (this.mode === "gameon") {
                this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
                // update game's timer
                this.game.time = this.timer;
                if (this.game.gameover) {
                    GameUtil.playGameoverSound()
                    this.game.endGame()
                    this.mode = "gameover"
                    return;
                }
                this.ctx.drawImage(this.grabPrevVideoFrame(), 0, 0, this.DIM_width, this.DIM_height);
                this.drawFilters();
                this.drawInstructions()
                this.game.draw(this.ctx, this.face);
                this.game.update();
            } else if (this.mode === "gameover") {
                this.warningNoFace.style.display = "none"
                this.warningMany.style.display = "none"
                this.warningFar.style.display = "none"
                this.warningClose.style.display = "none"

                clearInterval(this.timerId)
                GameUtil.stopBackgroundMusic(this.musicIntervalId)

                const levelElement = document.getElementById('level')
                levelElement.style.display = "none";

                const gameoverEl = document.getElementById("gameover-elements")

                gameoverEl.style.display = "block"
                const gameoverText = document.querySelector(".gameover-text")
                gameoverText.classList.add("gameover-active")

                const healthEl = document.getElementById("health-bar");
                healthEl.style.display = "none";
                // cancelAnimationFrame(this.requestId)
            } else {
                this.ctx.drawImage(this.video, 0, 0, this.DIM_width, this.DIM_height);
                this.drawFilters();
                this.drawInstructions()
            }
        }
        // Logic for error handling when face is too far or too close
        if (this.face !== undefined && this.mode !== "gameover") {
            if (this.face.boundingBox.bottomRight[0] - this.face.boundingBox.topLeft[0] - 40 < 100
                || this.face.boundingBox.bottomRight[1] - this.face.boundingBox.topLeft[1] + 110 < 175) {
                    if (this.warningNoFace.style.display !== "block" && this.warningMany.style.display !== "block") {
                        this.warningFar.style.display = "block"
                    }
            }
             else if (this.face.boundingBox.bottomRight[0] - this.face.boundingBox.topLeft[0] - 40 > 300
                || this.face.boundingBox.bottomRight[1] - this.face.boundingBox.topLeft[1] + 110 > 375) {
                    if (this.warningNoFace.style.display !== "block" && this.warningMany.style.display !== "block") {
                        this.warningClose.style.display = "block"
                    }
            } else {
                this.warningFar.style.display = "none"
                this.warningClose.style.display = "none"
            }
        }
    }

    setTimer() {
        this.timerElement.style.display = "block"
        this.timerId = setInterval(() => {
            this.timer += 1;
            const time = this.timerElement.innerHTML.split(":")
            let minutes = time[0]
            let seconds = time[1]
            seconds = this.timer % 60
            minutes = Math.floor(this.timer / 60)
            if (seconds < 10 && minutes < 10) {
                this.timerElement.innerHTML = `0${minutes}:0${seconds}`
            } else if (seconds < 10) {
                this.timerElement.innerHTML = `${minutes}:0${seconds}`
            } else if (minutes < 10) {
                this.timerElement.innerHTML = `0${minutes}:${seconds}`
            } else {
                this.timerElement.innerHTML = `${minutes}:${seconds}`
            }
        }, 1000)
    }

    goBackPage(ctx) {
        let length = this.instructionsPage.length
        if (length !== 1) {
            this.changePage(ctx, "left")
        }
    }

    goNextPage(ctx) {
        const length = this.instructionsPage.length
        if (length !== 5) {
            this.changePage(ctx, "right")
        }
    }

    changePage(ctx, pageDirection) {
        let length = this.instructionsPage.length
        const backButton = document.querySelector('.back')
        const nextButton = document.querySelector('.next')

        backButton.style.display = "block";
        nextButton.style.display = "block";
        // Remove last page we were on by giving it display none
        const oldText = pageDirection === 'left' ? this.instructionsPage.pop() : this.instructionsPage[length - 1]
        const oldTextEls = document.getElementsByClassName(`${oldText}-text`);
        const oldTextArr = Array.prototype.slice.call(oldTextEls)
        oldTextArr.forEach(el => {
            el.style.display = "none";
        })
        // update length, otherwise its using old length before pop
        length = this.instructionsPage.length

        let nextPageText = ""
        if (pageDirection === "right") {
            // Adding back the page items
            if (this.instructionsPage[length - 1] === "general") {
                nextPageText = "bomb"
            } else if (this.instructionsPage[length - 1] === "bomb") {
                nextPageText = "apple"
            } else if (this.instructionsPage[length - 1] === "apple") {
                nextPageText = "coin"
            } else if (this.instructionsPage[length - 1] === "coin") {
                nextPageText = "ghost"
            }
            this.instructionsPage.push(nextPageText)
        } else {
            nextPageText = this.instructionsPage[length - 1]
        }

        const newTextEls = document.getElementsByClassName(`${nextPageText}-text`);
        const newTextArr = Array.prototype.slice.call(newTextEls)
        newTextArr.forEach(el => {
            el.style.display = "block";
        })

        // Instruction images
        this.loadInstructionCtx(ctx)
        let imageIcon = null
        if (nextPageText !== "" && nextPageText !== "general") {
            imageIcon = document.getElementById(`${nextPageText}-icon`)
        }
        if (imageIcon) ctx.drawImage(imageIcon, 290, 240, 120, 120)

        if (pageDirection === 'left' && length === 1) {
            backButton.style.display = "none";
        } else if (pageDirection === 'right' && length === 4) {
            nextButton.style.display = "none";
        }
    }

    loadInstructionCtx(ctx) {
        ctx.clearRect(0, 0, 700, 450);
        ctx.fillStyle = "rgba(60, 179, 113, 0.8)";
        ctx.strokeStyle = "rgba(10, 129, 63, 0.5)";

        ctx.beginPath()
        ctx.roundRect(100, 50, 500, 350, [10])
        ctx.fill()
        ctx.stroke()
    }

    // Loading up the instructions first
    loadInstructions() {
        const instructionsEl = document.getElementById("instructions-canvas");
        instructionsEl.style.position = "absolute";
        instructionsEl.height = 450;
        instructionsEl.width = 700;
        const instructionsCtx = instructionsEl.getContext("2d");

        this.loadInstructionCtx(instructionsCtx)

        const backButton = document.querySelector(".back")
        backButton.addEventListener("click", () => {
            // clearInterval(this.intervalId)
            this.goBackPage(instructionsCtx)
        })

        const nextButton = document.querySelector(".next")
        nextButton.addEventListener("click", () => {
            // clearInterval(this.intervalId)
            this.goNextPage(instructionsCtx)
        })
    }

    // Show instructions or not based on the variable
    drawInstructions() {
        const instructionsEl = document.getElementById("instructions-elements")
        const instructionsCanvasEl = document.getElementById("instructions-canvas");

        if (this.instructions) {
            instructionsEl.style.display = "flex"
            instructionsCanvasEl.style.display = "block";
        } else {
            instructionsEl.style.display = "none"
            instructionsCanvasEl.style.display = "none";
        }

        const backButton = document.querySelector(".back")
        const nextButton = document.querySelector(".next")
        if (backButton.style.display === "none") {
            nextButton.classList.add("next-only")
        } else {
            nextButton.classList.remove("next-only")
        }
    }

    // When filters are clicked, they are revealed here
    drawFilters() {

        if (this.faceMaskDots && this.face !== undefined) {
            new ScanMask({
                face: this.face,
                ctx: this.ctx,
            });
        }

        if (this.hurtBox && this.face !== undefined) {
            new HurtBox({
                face: this.face,
                ctx: this.ctx,
            });
        }

    }

}

export default GameView;