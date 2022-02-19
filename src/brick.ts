import Component from "./components/component.js";
import { World } from "./components/world.js";
import Object from "./components/object.js";
import { Options } from "./options.js";
import loadImage from "./functions/loadImage.js";


export default class Brick extends Object implements Component {

    private texture = loadImage('/brick.png', 50, 50)

    constructor(x: number, y: number) {
        super()

        this.name = "brick"
        
        this.width = 50
        this.height = 50

        this.x = x
        this.y = y
    }

    draw = (options: Options) => {
        options.context.drawImage(this.texture, this.x, this.y, this.width, this.height)
    }

    update = (world: World) => { }
}