radio.setGroup(76)
music.setVolume(255)
let EstatAlarma = 0
basic.forever(function () {
    radio.sendNumber(EstatAlarma)
    if (input.magneticForce(Dimension.Strength) <= 150) {
        EstatAlarma = 1
        music.ringTone(262)
        basic.showIcon(IconNames.Square)
        basic.pause(10)
        music.stopAllSounds()
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(10)
    } else if (input.magneticForce(Dimension.Strength) > 150) {
        EstatAlarma = 0
        basic.clearScreen()
        music.stopAllSounds()
    }
})
