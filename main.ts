input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.AB, function () {
    player.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.Shake, function () {
    player.change(LedSpriteProperty.Y, -1)
})
let player: game.LedSprite = null
game.setScore(0)
let enemy = game.createSprite(randint(-10, 10), randint(-10, 10))
player = game.createSprite(0, 0)
music.playMelody("E B C5 A B G A F ", 120)
basic.forever(function () {
    if (player.isTouching(enemy)) {
        basic.showIcon(IconNames.StickFigure)
        music.playMelody("C5 G C - - - - - ", 120)
        control.reset()
    }
})
