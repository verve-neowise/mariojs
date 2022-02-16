import { Options } from "./options";

export default interface Component {

    draw: (options: Options) => void
    
    update: () => void
}