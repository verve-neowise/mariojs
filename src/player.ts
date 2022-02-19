import Component from "./components/component.js";
import Object from "./components/object.js";
import { Options } from "./options.js";
import loadImage from "./functions/loadImage.js";
import { World } from "./components/world.js";

export default class Player extends Object implements Component {

    left: HTMLImageElement
    right: HTMLImageElement

    private currentFrame: HTMLImageElement


    constructor(x: number, y: number) {
        super()

        this.x = x
        this.y = y
        this.width = 44
        this.height = 80
        this.left = loadImage('/mario_left.png', this.width, this.height)
        this.right = loadImage('/mario_right.png', this.width, this.height)
        this.currentFrame = this.right
    }

    draw = (options: Options) => {
        options.context.drawImage(this.currentFrame, this.x, this.y)
    }
    
    update = (world: World | null | undefined) => {
        if (this.velocity.x > 0) {
            this.currentFrame = this.right
        }
        if (this.velocity.x < 0) {
            this.currentFrame = this.left
        }
    }

    updatePositions = () => {
        this.x += this.velocity.x
        this.y += this.velocity.y
    }
}