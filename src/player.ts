import Component from "./component";
import Object from "./object";
import { Options } from "./options";

export default class Player extends Object implements Component {

    velocity = {
        x: 0,
        y: 0
    }

    constructor(x: number, y: number, width: number, height: number) {
        super()

        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }

    draw = (options: Options) => {
        options.context.fillStyle = 'blue'
        options.context.fillRect(this.x, this.y, this.width, this.height)
    }

    update = () => {
        // todo update logic 
    }
}