import { Player, Platform } from './gameObjects.js';
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
const Gravity = 2;
const player = new Player("Red player");
const platform = new Platform();
const options = {
    canvas: {
        width: canvas.width,
        height: canvas.height
    }
};
function init() {
    update();
}
function update() {
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
    if (player.bounds.maxY >= options.canvas.height) {
        player.bounds.y = options.canvas.height - player.bounds.height;
        player.velocity.y = 0;
    }
    if (player.bounds.maxY >= platform.bounds.y &&
        player.bounds.y <= platform.bounds.y &&
        player.bounds.maxX >= platform.bounds.x &&
        player.bounds.x <= platform.bounds.maxX) {
        player.bounds.y = platform.bounds.y - player.bounds.height;
        player.velocity.y = 0;
    }
    if (keys.up) {
        player.velocity.y = -10;
    }
    else {
        player.velocity.y += Gravity;
    }
    if (keys.left) {
        player.velocity.x = -10;
    }
    else if (keys.right) {
        player.velocity.x = 10;
    }
    else {
        player.velocity.x = 0;
    }
    player.update(options);
    platform.update(options);
    player.draw(context);
    platform.draw(context);
    requestAnimationFrame(update);
}
const keys = {
    up: false,
    left: false,
    right: false
};
function updateKeys(key, state) {
    if (key === 'ArrowLeft') {
        keys.left = state;
    }
    if (key === 'ArrowRight') {
        keys.right = state;
    }
}
document.addEventListener('keypress', (event) => {
    if (event.code === 'Space') {
        keys.up = true;
    }
});
document.addEventListener('keyup', (event) => {
    if (event.code === 'Space') {
        keys.up = false;
    }
    updateKeys(event.code, false);
});
document.addEventListener('keydown', (event) => {
    updateKeys(event.code, true);
});
init();
