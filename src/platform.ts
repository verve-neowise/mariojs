import Component from "./component.js";
import Object from "./object.js";
import { Options } from "./options.js";

export default class Platform extends Object implements Component {

    private color: string

    constructor(x: number, y: number, width: number, height: number, color: string) {
        super()

        this.name = color
        
        this.width = width
        this.height = height

        this.x = x
        this.y = y
        this.color = color
    }

    draw = (options: Options) => {
        options.context.fillStyle = this.color
        options.context.fillRect(this.x, this.y, this.width, this.height)
    }

    update = () => { }
}