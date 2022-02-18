import Component from "./component.js";
import Object from "./object.js";
import { Options } from "./options.js";

export default class Player extends Object implements Component {

    image: HTMLImageElement

    velocity = {
        x: 0,
        y: 0
    }

    constructor(x: number, y: number) {
        super()

        this.x = x
        this.y = y
        this.width = 44
        this.height = 80
        this.image = new Image(this.width, this.height)
        this.image.src = "/mario.png"
    }

    draw = (options: Options) => {
        options.context.drawImage(this.image, this.x, this.y, this.width, this.height)
    }

    update = () => {
        // todo update logic 
    }

    updatePositions = () => {
        this.x += this.velocity.x
        this.y += this.velocity.y
    }
}