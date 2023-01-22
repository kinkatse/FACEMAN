class Player {
    constructor(face) {
        this.face = face;
        this.health = 100;
        this.money = 0;
    }

    updateFace(face) {
        this.face = face;
    }

    draw(ctx) {
        // Create new canvas for the health bar
        const healthEl = document.getElementById("health-bar");
        healthEl.style.display = "block";
        healthEl.height = 450;
        healthEl.width = 50;
        const healthCtx = healthEl.getContext("2d");
        healthCtx.fillStyle = "red";
        healthCtx.fillRect(0, 0, 50, 450);

        // Draw health bar, which updates each draw based on health
        healthCtx.beginPath();
        healthCtx.lineWidth = 2;
        healthCtx.fillStyle = "green";
        healthCtx.fillRect(0, 0, 50, 22.5 * (this.health / 5));
        healthCtx.stroke();
    }

    takeDamage(damage) {
        this.health -= damage;
        console.log("Player got hit!");
        console.log(this.health);
        if (this.health <= 0) {
            // Game over function
            alert("Game over!");
        }
    }
}

export default Player;