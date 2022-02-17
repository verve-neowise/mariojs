import Component from "./component";
import Object from "./object";
import { Options } from "./options";

export default class Platform extends Object implements Component {

    private color: string

    constructor(x: number, y: number, width: number, height: number, color: string) {
        super()

        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = color
    }

    draw = (options: Options) => {
        options.context.fillStyle = this.color
        options.context.fillRect(this.x, this.y, this.width, this.height)
    }

    update = () => { }
}