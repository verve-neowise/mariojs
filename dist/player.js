import Object from "./components/object.js";
import loadImage from "./functions/loadImage.js";
export default class Player extends Object {
    constructor(x, y) {
        super();
        this.draw = (options) => {
            options.context.drawImage(this.currentFrame, this.x, this.y);
        };
        this.update = (world) => {
            if (this.velocity.x > 0) {
                this.currentFrame = this.right;
            }
            if (this.velocity.x < 0) {
                this.currentFrame = this.left;
            }
        };
        this.updatePositions = () => {
            this.x += this.velocity.x;
            this.y += this.velocity.y;
        };
        this.x = x;
        this.y = y;
        this.width = 44;
        this.height = 80;
        this.left = loadImage('/mario_left.png', this.width, this.height);
        this.right = loadImage('/mario_right.png', this.width, this.height);
        this.currentFrame = this.right;
    }
}
