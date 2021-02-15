bluetooth.onBluetoothConnected(function () {
    music.setVolume(127)
    music.playMelody("C C5 - - - - - - ", 120)
    flgF = 1
})
bluetooth.onBluetoothDisconnected(function () {
    music.playMelody("C5 C - - - - - - ", 120)
    flgF = 0
    led.unplot(0, 0)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.A, function () {
    bluetooth.uartWriteNumber(1)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Dollar), function () {
    flgF = 0
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
    music.setTempo(42)
    music.playTone(247, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(247, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(247, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(247, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(247, music.beat(BeatFraction.Eighth))
    music.playTone(494, music.beat(BeatFraction.Eighth))
    music.playTone(440, music.beat(BeatFraction.Eighth))
    music.playTone(494, music.beat(BeatFraction.Eighth))
    music.playTone(554, music.beat(BeatFraction.Eighth))
    music.playTone(587, music.beat(BeatFraction.Eighth))
    music.playTone(554, music.beat(BeatFraction.Eighth))
    music.playTone(494, music.beat(BeatFraction.Eighth))
    music.playTone(440, music.beat(BeatFraction.Eighth))
    music.playTone(370, music.beat(BeatFraction.Quarter))
    music.playTone(466, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    flgF = 2
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let flgF = 0
bluetooth.startButtonService()
bluetooth.startUartService()
bluetooth.startTemperatureService()
let adrY = 2
let adrX = 2
basic.forever(function () {
    if (flgF == 1) {
        if (Math.randomBoolean()) {
            if (adrX < 4) {
                adrX += 1
            }
        } else {
            if (adrX > 0) {
                adrX += -1
            }
        }
        if (Math.randomBoolean()) {
            if (adrY < 4) {
                adrY += 1
            }
        } else {
            if (adrY > 0) {
                adrY += -1
            }
        }
        led.plot(adrX, adrY)
        basic.pause(500)
        led.unplot(adrX, adrY)
        basic.pause(500)
    }
    if (flgF == 2) {
        led.plot(0, 2)
        basic.pause(500)
        led.unplot(0, 2)
        basic.pause(500)
    }
})
