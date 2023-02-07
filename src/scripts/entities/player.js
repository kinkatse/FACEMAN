class Player {
    constructor(face) {
        this.face = face;
        this.health = 100;
        this.score = 0;
    }

    updateFace(face) {
        this.face = face;
    }

    draw(ctx, healthCtx) {
        // Draw health bar, which updates each draw based on health
        healthCtx.fillStyle = "red";
        healthCtx.fillRect(0, 0, 50, 450);
        healthCtx.beginPath();
        healthCtx.lineWidth = 2;
        healthCtx.fillStyle = "green";
        healthCtx.fillRect(0, 0, 50, 22.5 * (this.health / 5));
        healthCtx.stroke();
    }

    takeDamage(damage) {
        if (this.health > 0) this.health -= damage;
        if (this.score >= 0) this.score -= 20;
        if (this.score <= 0) this.score = 0;
        this.updateScore()
        if (this.health <= 0) {
            this.health = 0;
            return "gameover"
        }
        return false
    }

    heal(amount) {
        if (this.health < 100) this.health += amount;
        console.log("Player got healed!");
        if (this.health >= 100) {
            this.health = 100;
            console.log("Max Health")
        }
        console.log(this.health);
    }

    addScore(amount) {
        this.score += amount;
        console.log("Score went up by 50!");
        console.log(this.score);
        this.updateScore()
    }

    updateScore() {
        const scoreEl = document.getElementById("score")
        scoreEl.style.display = "block";
        scoreEl.innerHTML = this.score;
    }
}

export default Player;