import Game from "./scripts/game"

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("canvas");
    canvasEl.height = 450;
    canvasEl.width = 700;
    const ctx = canvasEl.getContext("2d");
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, 700, 450);

    const hiddenCanvasEl = document.getElementById("hidden-canvas");
    hiddenCanvasEl.height = 450;
    hiddenCanvasEl.width = 700;
    const hiddenCTX = hiddenCanvasEl.getContext("2d");
    hiddenCTX.fillStyle = "grey";
    hiddenCTX.fillRect(0, 0, 700, 450);

    const video = document.getElementById("video");
    const game = new Game(ctx, video, hiddenCTX, hiddenCanvasEl);
})