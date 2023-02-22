input.onButtonPressed(Button.A, function () {
    balls += 1
    basic.showNumber(balls)
    basic.showString("B")
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(balls)
    basic.showString("B")
    basic.showNumber(strikes)
    basic.showString("S")
})
input.onButtonPressed(Button.B, function () {
    strikes += 1
    basic.showNumber(strikes)
    basic.showString("S")
})
input.onGesture(Gesture.Shake, function () {
    balls = 0
    strikes = 0
    basic.showNumber(balls)
    basic.showString("B")
    basic.showNumber(strikes)
    basic.showString("S")
})
let strikes = 0
let balls = 0
balls = 0
strikes = 0
basic.showNumber(balls)
basic.showString("B")
basic.showNumber(strikes)
basic.showString("S")
