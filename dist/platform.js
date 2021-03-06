import Object from "./object.js";
export default class Platform extends Object {
    constructor(x, y, width, height, color) {
        super();
        this.draw = (options) => {
            options.context.fillStyle = this.color;
            options.context.fillRect(this.x, this.y, this.width, this.height);
        };
        this.update = () => { };
        this.name = color;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.color = color;
    }
}
