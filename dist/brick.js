import Object from "./components/object.js";
import loadImage from "./functions/loadImage.js";
export default class Brick extends Object {
    constructor(x, y) {
        super();
        this.texture = loadImage('/brick.png', 50, 50);
        this.draw = (options) => {
            options.context.drawImage(this.texture, this.x, this.y, this.width, this.height);
        };
        this.update = (world) => { };
        this.name = "brick";
        this.width = 50;
        this.height = 50;
        this.x = x;
        this.y = y;
    }
}
