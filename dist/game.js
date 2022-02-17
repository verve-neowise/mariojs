import Player from "./player.js";
import Platform from "./platform.js";
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
document.onkeydown = (event) => keydown(event.code);
document.onkeyup = (event) => keyup(event.code);
const options = {
    canvas: canvas,
    context: context
};
const keys = {
    left: false,
    right: false,
    up: false,
    down: false
};
requestAnimationFrame(update);
const player = new Player(0, 0, 50, 50);
const platform = new Platform(300, 200, 200, 50, 'blue');
function update() {
    // const insideXAxis = player.x > platform.x && player.maxX < platform.maxX || player.maxX > platform.x && player.x < platform.maxX
    // const insideYAxis = player.y > platform.y && player.maxY < platform.maxY || player.maxY > platform.y && player.y < platform.maxY
    if (keys.left) {
        moveLeft();
    }
    else if (keys.right) {
        moveRight();
    }
    else {
        player.velocity.x = 0;
    }
    if (keys.up) {
        moveUp();
    }
    else if (keys.down) {
        moveDown();
    }
    else {
        player.velocity.y = 0;
    }
    player.updatePositions();
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
    player.draw(options);
    platform.draw(options);
    requestAnimationFrame(update);
}
function moveLeft() {
    player.velocity.x = -5;
    if (isInsideYAxis(platform) && checkLeftCollision(platform)) {
        player.velocity.x = 0;
        player.x = platform.maxX;
    }
}
function moveRight() {
    player.velocity.x = 5;
    if (isInsideYAxis(platform) && checkRightCollision(platform)) {
        player.velocity.x = 0;
        player.x = platform.x - player.width;
    }
}
function moveUp() {
    player.velocity.y = -5;
    if (isInsideXAxis(platform) && checkTopCollision(platform)) {
        player.velocity.y = 0;
        player.y = platform.maxY;
    }
}
function moveDown() {
    player.velocity.y = 5;
    if (isInsideXAxis(platform) && checkBottomCollision(platform)) {
        player.velocity.y = 0;
        player.y = platform.y - player.height;
    }
}
function checkLeftCollision(target) {
    return player.x + player.velocity.x < target.maxX && player.x > target.x;
}
function checkRightCollision(target) {
    return player.maxX + player.velocity.x > target.x && player.maxX < target.maxX;
}
function checkTopCollision(target) {
    return player.y + player.velocity.y < target.maxY && player.y > target.y;
}
function checkBottomCollision(target) {
    return player.maxY + player.velocity.y > target.y && player.maxY < target.maxY;
}
function isInsideYAxis(target) {
    return player.y > target.y && player.maxY < target.maxY || player.maxY > target.y && player.y < target.maxY;
}
function isInsideXAxis(target) {
    return player.x > target.x && player.maxX < target.maxX || player.maxX > target.x && player.x < platform.maxX;
}
function keydown(code) {
    keychange(code, true);
}
function keyup(code) {
    keychange(code, false);
}
function keychange(code, state) {
    if (code === 'KeyD') {
    }
    if (code === 'ArrowLeft') {
        keys.left = state;
    }
    if (code === 'ArrowRight') {
        keys.right = state;
    }
    if (code === 'ArrowDown') {
        keys.down = state;
    }
    if (code === 'ArrowUp') {
        keys.up = state;
    }
}
