import { Bounds } from "./components.js";
export class Player {
    constructor(name) {
        this.bounds = new Bounds(0, 0, 50, 50);
        this.velocity = {
            x: 0,
            y: 0
        };
        this.draw = (context) => {
            context.fillStyle = "red";
            context.fillRect(this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height);
        };
        this.update = (options) => {
            this.bounds.move(this.velocity);
            if (this.bounds.maxY >= options.canvas.height) {
                this.bounds.y = options.canvas.height - this.bounds.height;
                this.velocity.y = 0;
            }
        };
        this.name = name;
    }
}
