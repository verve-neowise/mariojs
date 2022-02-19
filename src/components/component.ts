import { World } from "./world.js";
import { Options } from "../options.js";

export default interface Component {

    draw: (options: Options) => void
    
    update: (world: World) => void
}