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
        };
        this.name = name;
    }
}
export class Platform {
    constructor() {
        this.name = "platform";
        this.bounds = new Bounds(300, 200, 400, 50);
        this.update = (options) => { };
    }
    draw(context) {
        context.fillStyle = 'blue';
        context.fillRect(this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height);
    }
}
