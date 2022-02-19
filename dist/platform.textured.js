import Object from "./components/object.js";
import loadImage from "./functions/loadImage.js";
export default class TexturedPlatform extends Object {
    constructor(x, y) {
        super();
        this.texture = loadImage('/platform.png', 136, 50);
        this.draw = (options) => {
            options.context.drawImage(this.texture, this.x, this.y);
        };
        this.update = (world) => { };
        this.name = "textured platform";
        this.width = 136;
        this.height = 50;
        this.x = x;
        this.y = y;
    }
}
