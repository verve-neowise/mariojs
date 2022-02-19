import Component from "./components/component.js";
import Object from "./components/object.js";
import { Options } from "./options.js";
import loadImage from "./functions/loadImage.js";
import { World } from "./components/world.js";

export default class Player extends Object implements Component {

    image: HTMLImageElement


    constructor(x: number, y: number) {
        super()

        this.x = x
        this.y = y
        this.width = 44
        this.height = 80
        this.image = loadImage('/mario.png', this.width, this.height)
    }

    draw = (options: Options) => {
        options.context.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
    
    update = (world: World) => { }

    updatePositions = () => {
        this.x += this.velocity.x
        this.y += this.velocity.y
    }
}