// function checkLeftCollision(target: Object): boolean {
//     return player.x + player.velocity.x < target.maxX && player.x > target.x
// }
// function checkRightCollision(target: Object): boolean {
//     return player.maxX + player.velocity.x > target.x && player.maxX < target.maxX
// }
export const bottom = (src, target) => start(src.maxY, src.velocity.y, target.y, target.maxY);
export const left = (src, target) => start(src.x, src.velocity.x, target.x, target.maxX);
export const top = (src, target) => end(src.y, src.velocity.y, target.y, target.maxY);
export const right = (src, target) => end(src.maxX, src.velocity.x, target.x, target.maxX);
function end(x, velocity, start, end) {
    return x + velocity <= end && x >= start;
}
function start(x, velocity, start, end) {
    return x + velocity >= start && x <= end;
}
export default {
    top,
    bottom,
    left,
    right
};
