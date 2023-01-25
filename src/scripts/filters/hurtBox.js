import Filter from './filter.js'
import FaceUtil from '../faceUtil.js';

class HurtBox extends Filter {

    constructor(options) {
        super(options)
    }

    draw() {
        this.ctx.lineWidth = 5;
        this.ctx.strokeStyle = 'rgba(255, 0, 0, 0.5)';
        this.ctx.beginPath();
        let startpt = this.face.annotations.silhouette[0];
        startpt = FaceUtil.scaleCoord(startpt);

        for (let pt of this.face.annotations.silhouette) {
            pt = FaceUtil.scaleCoord(pt);
            this.ctx.lineTo(...pt)
        }
        this.ctx.lineTo(...startpt);
        this.ctx.stroke();
    }

}

export default HurtBox;