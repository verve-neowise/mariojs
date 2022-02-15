import { Bounds } from "./components.js";
export class Player {
    constructor(name) {
        this.type = "player";
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
    constructor(x, y, width, color) {
        this.name = "platform";
        this.type = "platform";
        this.update = (options) => { };
        this.bounds = new Bounds(x, y, width, 150);
        this.color = color;
    }
    draw(context) {
        context.fillStyle = this.color;
        context.fillRect(this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height);
    }
}
