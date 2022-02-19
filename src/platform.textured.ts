import Component from "./components/component.js";
import { World } from "./components/world.js";
import Object from "./components/object.js";
import { Options } from "./options.js";
import loadImage from "./functions/loadImage.js";


export default class TexturedPlatform extends Object implements Component {

    private texture = loadImage('/platform.png', 136, 50)

    constructor(x: number, y: number) {
        super()

        this.name = "textured platform"
        
        this.width = 136
        this.height = 50

        this.x = x
        this.y = y
    }

    draw = (options: Options) => {
        options.context.drawImage(this.texture, this.x, this.y)
    }

    update = (world: World) => { }
}