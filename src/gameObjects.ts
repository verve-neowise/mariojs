import { Bounds, Component, Options, Position } from "./components.js"

export class Player implements Component {

    name: string;

    constructor(name: string) {
        this.name = name
    }

    bounds = new Bounds(0, 0, 50, 50);

    velocity: Position = {
        x: 0,
        y: 0
    }

    draw = (context: CanvasRenderingContext2D) => {
        context.fillStyle = "red";
        context.fillRect(
            this.bounds.x,
            this.bounds.y,
            this.bounds.width,
            this.bounds.height
            );
    };

    update = (options: Options) => {
        this.bounds.move(this.velocity)

    };
}

export class Platform implements Component {
    name = "platform";
    bounds = new Bounds(300, 200, 400, 50)

    draw(context: CanvasRenderingContext2D) {
        context.fillStyle = 'blue'
        context.fillRect(this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height)
    }

    update = (options: Options) => {}
}