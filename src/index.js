const Game = require("./scripts/game")
// const View = require("./scripts/view")

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("canvas");
    canvasEl.height = 450;
    canvasEl.width = 700;
    const ctx = canvasEl.getContext("2d");
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, 700, 450);
    const game = new Game;
})