import { Component, Bounds, Position, Options } from './components.js'
import { Player, Platform } from './gameObjects.js'

const canvas: HTMLCanvasElement = document.querySelector('#canvas')!
const context: CanvasRenderingContext2D = canvas.getContext('2d')!

const Gravity = 2
const Speed = 10

const player = new Player("Red player")
const platforms = [
    new Platform(200, 200, 100, 'red'),
    new Platform(100, 350, 150, 'blue'),
    new Platform(500, 300, 100, 'deepskyblue')
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

        const isBottom = player.bounds.y < platform.bounds.maxY;
        const isTop = player.bounds.maxY > platform.bounds.y;

        const isLeft = player.bounds.maxX > platform.bounds.x;
        const isRight = player.bounds.x < platform.bounds.maxX;

        const isInsideXAxis = isLeft && isRight
        const isInsideYAxis = isTop && isBottom

        const moveLeft = player.velocity.x < 0
        const moveRight = player.velocity.x > 0
        const moveUp = player.velocity.y < 0
        const moveDown = player.velocity.y > 0

        if (isInsideXAxis && isInsideYAxis) {
            if (moveRight) {
                player.bounds.x = platform.bounds.x - player.bounds.width
                player.velocity.x = 0
            }
            else if (moveLeft) {
                player.bounds.x = platform.bounds.maxX
                player.velocity.x = 0
            }
            else if (moveDown) {
                player.bounds.y = platform.bounds.y - player.bounds.height
                player.velocity.y = 0
            }
            else if (moveUp) {
                player.bounds.y = platform.bounds.maxY
                player.velocity.y = 0
            }
        }

        // if (player.bounds.maxX >= platform.bounds.x &&
        //     player.bounds.x <= platform.bounds.maxX) {

        //     // top collision
        //     if (player.bounds.maxY >= platform.bounds.y &&
        //         player.bounds.y <= platform.bounds.y) {

        //         player.bounds.y = platform.bounds.y - player.bounds.height
        //         player.velocity.y = 0
        //     }

        //     // bottom collision
        //     if (player.bounds.y >= platform.bounds.y &&
        //         player.bounds.y <= platform.bounds.maxY) {
        //             player.bounds.y = platform.bounds.maxY
        //             player.velocity.y = 0
        //     }
        // }
        // if (player.bounds.y >= platform.bounds.y && player.bounds.y <= platform.bounds.maxY &&
        //     player.bounds.maxY >= platform.bounds.y && player.bounds.maxY <= platform.bounds.maxY) {
            
        //         if (player.bounds.maxX >= platform.bounds.x && player.bounds.maxX <= platform.bounds.maxX) {
        //             player.bounds.x = platform.bounds.x - player.bounds.width
        //             player.velocity.x = 0
        //         }

        //         if (player.bounds.x <= platform.bounds.maxX && player.bounds.x >= platform.bounds.x) {
        //             player.bounds.x = platform.bounds.maxX
        //             player.velocity.x = 0
        //         }
        // }
    });


    if (keys.up) {
        player.velocity.y = -(Speed)
    }
    else {
        player.velocity.y += Gravity
    }

    if (keys.left) {
        player.velocity.x = -Speed
    }
    else if (keys.right) {
        player.velocity.x = Speed
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