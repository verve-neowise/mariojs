import Object from "../../components/object"

type Collision = (object: Object, target: Object) => boolean;

export const bottom: Collision = (src, target) =>
    start(src.maxY, src.velocity.y, target.y, target.maxY)

export const left: Collision = (src, target) => 
    start(src.x, src.velocity.x, target.x, target.maxX)

export const top: Collision = (src, target) => 
    end(src.y, src.velocity.y, target.y, target.maxY)

export const right: Collision = (src, target) => 
    end(src.maxX, src.velocity.x, target.x, target.maxX)

function end(x: number, velocity: number, start: number, end: number) {
    return  x + velocity <= end && x >= start
}

function start(x: number, velocity: number, start: number, end: number) {
    return x + velocity >= start && x <= end
} 

export default {
    top,
    bottom,
    left,
    right
}