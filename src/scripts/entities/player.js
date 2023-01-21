class Player {
    constructor(face) {
        this.face = face;
        this.health = 100;
        this.money = 0;
    }

    pos() {
        
    }

    updateFace(face) {
        this.face = face;
    }

    takeDamage(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            // Game over function
            alert("Game over!")
        }
    }
}

export default Player;