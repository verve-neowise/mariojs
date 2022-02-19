import Object from "./object";
import { World } from "./world";

export default abstract class Trigger {

    target: Object

    constructor(target: Object) {
        this.target = target
    }

    abstract update(world: World) : void
}