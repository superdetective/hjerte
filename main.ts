input.onButtonPressed(Button.A, function () {
    images.createImage(`
        . . . . .
        # # . # #
        # # # # #
        . # # # .
        . . # . .
        `).showImage(0)
    basic.pause(2000)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        # . . . #
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(2000)
})
