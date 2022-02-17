import Object from "./object.js";
export default class Player extends Object {
    constructor(x, y, width, height) {
        super();
        this.velocity = {
            x: 0,
            y: 0
        };
        this.draw = (options) => {
            options.context.fillStyle = 'crimson';
            options.context.fillRect(this.x, this.y, this.width, this.height);
        };
        this.update = () => {
            // todo update logic 
        };
        this.updatePositions = () => {
            this.x += this.velocity.x;
            this.y += this.velocity.y;
        };
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}
