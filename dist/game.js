import Player from "./player.js";
import Platform from "./platform.js";
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
document.onkeydown = (event) => keydown(event.code);
document.onkeyup = (event) => keyup(event.code);
document.onkeypress = (event) => keypressed(event.code);
const GRAVITY = 2;
const JUMP_LIMIT = 6;
let inertia = JUMP_LIMIT;
let canJump = false;
const options = {
    canvas: canvas,
    context: context
};
const keys = { left: false, right: false, up: false, down: false };
requestAnimationFrame(update);
const player = new Player(0, 0);
const platforms = [
    new Platform(100, 150, 300, 50, 'black'),
    new Platform(500, 320, 200, 50, 'pink'),
    new Platform(300, 500, 200, 50, 'deepskyblue'),
    new Platform(100, 360, 200, 50, 'orange'),
];
function update() {
    movePlatforms();
    canJump = false;
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
    else if (player.velocity.y < 0) {
        checkTopCollisionInPlatforms();
        applyGravity();
    }
    else {
        applyGravity();
    }
    player.updatePositions();
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
    player.draw(options);
    platforms.forEach(platform => platform.draw(options));
    requestAnimationFrame(update);
}
function movePlatforms() {
}
function moveLeft() {
    player.velocity.x = -5;
    platforms.forEach(platform => {
        if (isInsideYAxis(platform) && checkLeftCollision(platform)) {
            player.velocity.x = 0;
            player.x = platform.maxX;
        }
    });
}
function moveRight() {
    player.velocity.x = 5;
    platforms.forEach(platform => {
        if (isInsideYAxis(platform) && checkRightCollision(platform)) {
            player.velocity.x = 0;
            player.x = platform.x - player.width;
        }
    });
}
function moveUp() {
    player.velocity.y -= inertia;
    inertia--;
    if (inertia < 0) {
        inertia = JUMP_LIMIT;
        keys.up = false;
    }
    checkTopCollisionInPlatforms();
}
function checkTopCollisionInPlatforms() {
    platforms.forEach(platform => {
        if (isInsideXAxis(platform) && checkTopCollision(platform)) {
            player.velocity.y = 0;
            player.y = platform.maxY;
            keys.up = false;
            inertia = JUMP_LIMIT;
        }
    });
}
function applyGravity() {
    player.velocity.y += GRAVITY;
    if (checkFloorCollision()) {
        player.velocity.y = 0;
        player.y = canvas.height - player.height;
        canJump = true;
    }
    else {
        platforms.forEach(platform => {
            if (isInsideXAxis(platform) && checkBottomCollision(platform)) {
                player.velocity.y = 0;
                player.y = platform.y - player.height;
                canJump = true;
            }
        });
    }
}
function checkFloorCollision() {
    return player.maxY + player.velocity.y >= canvas.height;
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
    return player.maxY + player.velocity.y >= target.y && player.maxY < target.maxY;
}
function isInsideYAxis(target) {
    return player.y > target.y && player.maxY < target.maxY || player.maxY > target.y && player.y < target.maxY;
}
function isInsideXAxis(target) {
    return player.x > target.x && player.maxX < target.maxX || player.maxX > target.x && player.x < target.maxX;
}
function keydown(code) {
    keychange(code, true);
}
function keyup(code) {
    keychange(code, false);
}
function keychange(code, state) {
    if (code === 'ArrowLeft') {
        keys.left = state;
    }
    if (code === 'ArrowRight') {
        keys.right = state;
    }
    if (code === 'ArrowDown') {
        keys.down = state;
    }
}
function keypressed(code) {
    if (code === 'Space' && canJump) {
        keys.up = true;
    }
}
