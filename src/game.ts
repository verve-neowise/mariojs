import Player from "./player.js"
import Platform from "./platform.js"
import { Options } from "./options.js"
import Component from "./component.js"
import Object from './object.js'

const canvas = document.querySelector('#canvas') as HTMLCanvasElement
const context = canvas.getContext('2d')!

document.onkeydown = (event) => keydown(event.code)

document.onkeyup = (event) => keyup(event.code)

const options: Options = {
    canvas: canvas,
    context: context
}

const keys = {
    left: false,
    right: false,
    up: false,
    down: false
}

requestAnimationFrame(update)

const player = new Player(0, 0, 50, 50)

const platform = new Platform(300, 200, 200, 50, 'blue')

function update() {
    
    const insideXAxis = player.x > platform.x && player.maxX < platform.maxX || player.maxX > platform.x && player.x < platform.maxX

    const insideYAxis = player.y > platform.y && player.maxY < platform.maxY || player.maxY > platform.y && player.y < platform.maxY

    if (keys.left) {

        player.velocity.x = -5

        if (insideYAxis && player.x + player.velocity.x < platform.maxX && player.x > platform.x) {
            // left
            player.velocity.x = 0
            player.x = platform.maxX
        }
    }
    else if (keys.right) {
        player.velocity.x = 5

        if (insideYAxis && player.maxX + player.velocity.x > platform.x && player.maxX < platform.maxX) {
            player.velocity.x = 0
            player.x = platform.x - player.width
        }
    }
    else {
        player.velocity.x = 0
    }

    if (keys.up) {
        player.velocity.y = -5

        if (insideXAxis && player.y + player.velocity.y < platform.maxY && player.y > platform.y) {
            player.velocity.y = 0
            player.y = platform.maxY
        }
    }
    else if (keys.down) {
        player.velocity.y = 5

        if (insideXAxis && player.maxY + player.velocity.y > platform.y && player.maxY < platform.maxY) {
            player.velocity.y = 0
            player.y = platform.y - player.height
        }
    }
    else {
        player.velocity.y = 0
    }

    player.updatePositions()

    context.fillStyle = 'white'
    context.fillRect(0, 0, canvas.width, canvas.height)

    player.draw(options)
    platform.draw(options)

    requestAnimationFrame(update)
}

function checkLeftCollision(player: Player, second: Object): boolean {
    const insideYAxis = player.y > second.y && player.maxY < second.maxY || player.maxY > second.y && player.y < second.maxY
    return false
}

function isInsideXAxis(player: Player, target: Object): boolean {
    return player.y > target.y && player.maxY < target.maxY || player.maxY > target.y && player.y < target.maxY
}

function moveUp() {

}

function moveDown() {
    
}

function moveRight() {

}

function moveLeft() {

}

function keydown(code: string) {
    keychange(code, true)
}

function keyup(code: string) {
    keychange(code, false)
}

function keychange(code: string, state: boolean) {
    if (code === 'KeyD') {

    }
    if (code === 'ArrowLeft') {
        keys.left = state
    }
    if (code === 'ArrowRight') {
        keys.right = state
    }
    if (code === 'ArrowDown') {
        keys.down = state
    }
    if (code === 'ArrowUp') {
        keys.up = state
    }
}