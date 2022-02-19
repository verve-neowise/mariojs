// check occurence of src in target with x axis
const xAxis = (src, target) => checkOccurence(src.x, src.maxX, target.x, target.maxX);
// check occurence of src in target with y axis
const yAxis = (src, target) => checkOccurence(src.y, src.maxY, target.y, target.maxY);
// check occurence of a and b in tA and tB
function checkOccurence(a, b, tA, tB) {
    return a > tA && b < tB || b > tA && a < tB;
}
export default {
    xAxis,
    yAxis
};
