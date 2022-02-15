import { Component, Bounds, Position, Options } from './components.js'
import { Player, Platform } from './gameObjects.js'

const canvas: HTMLCanvasElement = document.querySelector('#canvas')!
const context: CanvasRenderingContext2D = canvas.getContext('2d')!

const Gravity = 2

const player = new Player("Red player")
const platforms = [
    new Platform(200, 200, 100, 'red'),
    new Platform(100, 350, 150, 'blue'),
    new Platform(500, 300, 200, 'deepskyblue')
]

const options: Options = {
    canvas: {
        width: canvas.width,
        height: canvas.height
    }
}

// https://verve-neowise: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@github.com/verve-neowise/mariojs.git

function init() {
    update()
}

function update() {

    context.fillStyle = 'white'
    context.fillRect(0, 0, canvas.width, canvas.height)

    if (player.bounds.maxY >= options.canvas.height) {
        player.bounds.y = options.canvas.height - player.bounds.height
        player.velocity.y = 0
    }

    platforms.forEach(platform => {
        if (
            player.bounds.maxX >= platform.bounds.x &&
            player.bounds.x <= platform.bounds.maxX
        ) {
            if (
                player.bounds.maxY >= platform.bounds.y &&
                player.bounds.y <= platform.bounds.y) {

                player.bounds.y = platform.bounds.y - player.bounds.height
                player.velocity.y = 0
            }

            if (player.bounds.y >= platform.bounds.y &&
                player.bounds.y <= platform.bounds.maxY) {
                    player.bounds.y = platform.bounds.maxY
                    player.velocity.y = 0
                }
        }

    });


    if (keys.up) {
        player.velocity.y = -20
    }
    else {
        player.velocity.y += Gravity
    }

    if (keys.left) {
        player.velocity.x = -10
    }
    else if (keys.right) {
        player.velocity.x = 10
    }
    else {
        player.velocity.x = 0
    }

    player.update(options)
    player.draw(context)

    platforms.forEach(platform => {
        platform.update(options)
        platform.draw(context)
    })

    requestAnimationFrame(update)
}

const keys = {
    up: false,
    left: false,
    right: false
}

function updateKeys(key: string, state: boolean) {

    if (key === 'ArrowLeft') {
        keys.left = state
    }
    if (key === 'ArrowRight') {
        keys.right = state
    }
}

document.addEventListener('keypress', (event) => {
    if (event.code === 'Space') {
        keys.up = true
    }
})
document.addEventListener('keyup', (event) => {
    if (event.code === 'Space') {
        keys.up = false
    }
    updateKeys(event.code, false)
})
document.addEventListener('keydown', (event) => {
    updateKeys(event.code, true)
})

init()