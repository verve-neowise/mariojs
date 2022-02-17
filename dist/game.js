import Player from "./player";
import Platform from "./platform";
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
const options = {
    canvas: canvas,
    context: context
};
setInterval(update, 20);
const player = new Player(0, 0, 50, 50);
const platforms = [
    new Platform(300, 200, 200, 50, 'blue')
];
function update() {
    player.draw(options);
    platforms.forEach(platform => platform.draw(options));
}
function keydown(code) {
}
function keyup(code) {
}
