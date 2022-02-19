import Object from "../../components/object";

type Occurence = (src: Object, target: Object) => boolean

// check occurence of src in target with x axis
const xAxis: Occurence = (src, target) => checkOccurence(src.x, src.maxX, target.x, target.maxX)

// check occurence of src in target with y axis
const yAxis: Occurence = (src: Object, target: Object) => checkOccurence(src.y, src.maxY, target.y, target.maxY)

// check occurence of a and b in tA and tB
function checkOccurence(a: number, b: number, tA: number, tB: number) {
    return a > tA && b < tB || b > tA && a < tB
}

export default {
    xAxis,
    yAxis
}