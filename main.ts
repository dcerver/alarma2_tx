radio.setGroup(76)
music.setVolume(236)
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) <= 150) {
        radio.sendNumber(1)
        music.ringTone(262)
        basic.showIcon(IconNames.Square)
        basic.pause(10)
        music.stopAllSounds()
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(10)
    } else if (input.magneticForce(Dimension.Strength) > 150) {
        radio.sendNumber(0)
        basic.clearScreen()
        music.stopAllSounds()
    }
})
