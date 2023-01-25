import Filter from './filter.js'
import FaceUtil from '../faceUtil.js';

class ScanMask extends Filter {

    constructor(options) {
        super(options)
    }

    draw() {
        // Making blue mask around face
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = 'rgba(0, 150, 255, 0.5)';
        this.ctx.beginPath();
        let startpt = this.face.annotations.silhouette[0];
        startpt = FaceUtil.scaleCoord(startpt);

        for (let pt of this.face.annotations.silhouette) {
            pt = FaceUtil.scaleCoord(pt);
            this.ctx.lineTo(...pt)
        }

        // This is to close the shape
        this.ctx.lineTo(...startpt);
        this.ctx.fillStyle = 'rgba(0, 150, 255, 0.3)';
        this.ctx.fill();
        this.ctx.stroke();
        
        // Making face dots for each facial feature
        for (let pt of this.face.scaledMesh) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = "black";
            pt = FaceUtil.scaleCoord(pt);
            let x = pt[0];
            let y = pt[1];
            this.ctx.arc(x, y, 0.5, 0, 2 * Math.PI);
            this.ctx.fillStyle = "black";
            this.ctx.fill();
            this.ctx.stroke();
        }

        // Drawing mouth
        let mouth = FaceUtil.innerLipPoints(this.face)
        this.ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
        this.ctx.beginPath();
        for (let pt of mouth) {
            pt = FaceUtil.scaleCoord(pt);
            this.ctx.lineTo(...pt)
        }
        this.ctx.closePath();
        this.ctx.fill();
    }

}

export default ScanMask;