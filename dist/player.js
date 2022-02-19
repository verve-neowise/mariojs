import Object from "./components/object.js";
import loadImage from "./functions/loadImage.js";
export default class Player extends Object {
    constructor(x, y) {
        super();
        this.draw = (options) => {
            options.context.drawImage(this.image, this.x, this.y, this.width, this.height);
        };
        this.update = (world) => { };
        this.updatePositions = () => {
            this.x += this.velocity.x;
            this.y += this.velocity.y;
        };
        this.x = x;
        this.y = y;
        this.width = 44;
        this.height = 80;
        this.image = loadImage('/mario.png', this.width, this.height);
    }
}
