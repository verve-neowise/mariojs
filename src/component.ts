import { Options } from "./options.js";

export default interface Component {

    draw: (options: Options) => void
    
    update: () => void
}