function Caminar_adelante () {
    robotbit.Servo(robotbit.Servos.S2, 90)
    robotbit.Servo(robotbit.Servos.S4, 90)
    robotbit.Servo(robotbit.Servos.S3, 90)
    robotbit.Servo(robotbit.Servos.S1, 90)
    for (let index = 0; index < 4; index++) {
        robotbit.Servo(robotbit.Servos.S4, 100)
        robotbit.Servo(robotbit.Servos.S2, 100)
        basic.pause(300)
        robotbit.Servo(robotbit.Servos.S3, 60)
        robotbit.Servo(robotbit.Servos.S1, 60)
        basic.pause(300)
        robotbit.Servo(robotbit.Servos.S4, 90)
        robotbit.Servo(robotbit.Servos.S2, 90)
        basic.pause(300)
        robotbit.Servo(robotbit.Servos.S2, 80)
    }
}
function Paso3 () {
    robotbit.Servo(robotbit.Servos.S3, 60)
    robotbit.Servo(robotbit.Servos.S1, 60)
    basic.pause(200)
    robotbit.Servo(robotbit.Servos.S3, 100)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.showLeds(`
            . # # # .
            # . . . #
            . . . . .
            . # . # .
            . . . . .
            `)
        Feliz()
        music.stopMelody(MelodyStopOptions.All)
    } else if (receivedNumber == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.showLeds(`
            # . . . #
            . # # # .
            . . . . .
            . # . # .
            . . . . .
            `)
        Triste()
    } else if (receivedNumber == 2) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpDown), music.PlaybackMode.LoopingInBackground)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.showLeds(`
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            . # . # .
            `)
        Sorpresa()
        music.stopMelody(MelodyStopOptions.All)
    } else if (receivedNumber == 3) {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . . .
            # # . # #
            . . . . .
            `)
        Neutro()
    } else if (receivedNumber == 4) {
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
        basic.showLeds(`
            # . # . #
            # # # # #
            # # # # #
            # . # . #
            . # # # .
            `)
        Baile1()
    }
})
function Feliz () {
    robotbit.Servo(robotbit.Servos.S7, 180)
    robotbit.Servo(robotbit.Servos.S5, 0)
    for (let index = 0; index < 4; index++) {
        robotbit.Servo(robotbit.Servos.S6, 30)
        robotbit.Servo(robotbit.Servos.S8, 150)
        basic.pause(300)
        robotbit.Servo(robotbit.Servos.S8, 90)
        robotbit.Servo(robotbit.Servos.S6, 90)
        basic.pause(300)
    }
    basic.pause(200)
    for (let index = 0; index < 4; index++) {
        robotbit.Servo(robotbit.Servos.S3, 60)
        robotbit.Servo(robotbit.Servos.S1, 60)
        basic.pause(200)
        robotbit.Servo(robotbit.Servos.S3, 100)
        robotbit.Servo(robotbit.Servos.S1, 100)
        basic.pause(200)
    }
    Inicio()
}
function Baile1 () {
    Despacito()
    Feliz()
    Caminar_adelante()
    Feliz()
    Caminar_atras()
}
function Triste () {
    robotbit.Servo(robotbit.Servos.S7, 90)
    robotbit.Servo(robotbit.Servos.S5, 90)
    basic.pause(300)
    robotbit.Servo(robotbit.Servos.S8, 160)
    robotbit.Servo(robotbit.Servos.S6, 20)
    robotbit.Servo(robotbit.Servos.S4, 170)
    robotbit.Servo(robotbit.Servos.S2, 10)
    basic.pause(2000)
    Inicio()
}
function Paso2 () {
    robotbit.Servo(robotbit.Servos.S2, 150)
    robotbit.Servo(robotbit.Servos.S4, 30)
    robotbit.Servo(robotbit.Servos.S7, 30)
    robotbit.Servo(robotbit.Servos.S5, 30)
    basic.pause(200)
    robotbit.Servo(robotbit.Servos.S2, 90)
    robotbit.Servo(robotbit.Servos.S4, 90)
    robotbit.Servo(robotbit.Servos.S7, 90)
    robotbit.Servo(robotbit.Servos.S5, 90)
}
function Manos_arriba2 () {
    robotbit.Servo(robotbit.Servos.S7, 180)
    robotbit.Servo(robotbit.Servos.S5, 0)
    for (let index = 0; index < 4; index++) {
        robotbit.Servo(robotbit.Servos.S6, 30)
        robotbit.Servo(robotbit.Servos.S8, 150)
        basic.pause(300)
        robotbit.Servo(robotbit.Servos.S8, 90)
        robotbit.Servo(robotbit.Servos.S6, 90)
        basic.pause(300)
    }
    robotbit.Servo(robotbit.Servos.S7, 0)
    robotbit.Servo(robotbit.Servos.S5, 180)
}
function Despacito () {
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(554, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(554, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(554, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(554, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(554, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(554, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(554, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(554, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(659, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(554, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(554, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(659, music.beat(BeatFraction.Half))
    music.playTone(659, music.beat(BeatFraction.Half))
    music.playTone(554, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(370, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(554, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(554, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(554, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(554, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(554, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(554, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(554, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(659, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(554, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(554, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(554, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(554, music.beat(BeatFraction.Double))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(554, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Quarter))
    music.playTone(370, music.beat(BeatFraction.Quarter))
    music.playTone(370, music.beat(BeatFraction.Quarter))
    music.playTone(370, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(554, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(554, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Quarter))
    music.playTone(659, music.beat(BeatFraction.Quarter))
    music.playTone(659, music.beat(BeatFraction.Half))
    music.playTone(554, music.beat(BeatFraction.Double))
}
function Caminar_atras () {
    robotbit.Servo(robotbit.Servos.S2, 90)
    robotbit.Servo(robotbit.Servos.S4, 90)
    robotbit.Servo(robotbit.Servos.S3, 90)
    robotbit.Servo(robotbit.Servos.S1, 90)
    for (let index = 0; index < 4; index++) {
        robotbit.Servo(robotbit.Servos.S4, 100)
        robotbit.Servo(robotbit.Servos.S2, 100)
        basic.pause(300)
        robotbit.Servo(robotbit.Servos.S3, 120)
        robotbit.Servo(robotbit.Servos.S1, 120)
        basic.pause(300)
        robotbit.Servo(robotbit.Servos.S4, 90)
        robotbit.Servo(robotbit.Servos.S2, 90)
        basic.pause(300)
        robotbit.Servo(robotbit.Servos.S2, 80)
        robotbit.Servo(robotbit.Servos.S4, 80)
        basic.pause(300)
        robotbit.Servo(robotbit.Servos.S1, 60)
        robotbit.Servo(robotbit.Servos.S3, 60)
        basic.pause(300)
        robotbit.Servo(robotbit.Servos.S4, 90)
        robotbit.Servo(robotbit.Servos.S2, 90)
    }
    robotbit.Servo(robotbit.Servos.S3, 90)
    robotbit.Servo(robotbit.Servos.S1, 90)
}
function Inicio () {
    robotbit.Servo(robotbit.Servos.S1, 90)
    robotbit.Servo(robotbit.Servos.S2, 90)
    robotbit.Servo(robotbit.Servos.S3, 90)
    robotbit.Servo(robotbit.Servos.S4, 90)
    robotbit.Servo(robotbit.Servos.S5, 90)
    robotbit.Servo(robotbit.Servos.S6, 90)
    robotbit.Servo(robotbit.Servos.S7, 90)
    robotbit.Servo(robotbit.Servos.S8, 90)
}
function Sorpresa () {
    robotbit.Servo(robotbit.Servos.S7, 180)
    robotbit.Servo(robotbit.Servos.S5, 0)
    basic.pause(300)
    robotbit.Servo(robotbit.Servos.S2, 170)
    robotbit.Servo(robotbit.Servos.S4, 10)
    for (let index = 0; index < 4; index++) {
        robotbit.Servo(robotbit.Servos.S8, 160)
        robotbit.Servo(robotbit.Servos.S6, 20)
        basic.pause(200)
        robotbit.Servo(robotbit.Servos.S8, 90)
        robotbit.Servo(robotbit.Servos.S6, 90)
        basic.pause(200)
    }
    basic.pause(2000)
    robotbit.Servo(robotbit.Servos.S2, 110)
    robotbit.Servo(robotbit.Servos.S4, 70)
    basic.pause(120)
    Inicio()
}
function Paso1 () {
    robotbit.Servo(robotbit.Servos.S2, 135)
    basic.pause(200)
    robotbit.Servo(robotbit.Servos.S2, 90)
    basic.pause(200)
    robotbit.Servo(robotbit.Servos.S4, 45)
    basic.pause(200)
    robotbit.Servo(robotbit.Servos.S4, 90)
    basic.pause(200)
}
function Neutro () {
    music.setTempo(150)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
    robotbit.Servo(robotbit.Servos.S5, 180)
    robotbit.Servo(robotbit.Servos.S7, 0)
    for (let index = 0; index < 6; index++) {
        robotbit.Servo(robotbit.Servos.S3, 100)
        robotbit.Servo(robotbit.Servos.S1, 80)
        basic.pause(200)
        robotbit.Servo(robotbit.Servos.S3, 90)
        robotbit.Servo(robotbit.Servos.S1, 90)
        basic.pause(200)
    }
    Inicio()
    music.stopMelody(MelodyStopOptions.All)
}
let strip: neopixel.Strip = null
radio.setGroup(117)
basic.showLeds(`
    . . . # .
    . . # . #
    . # . . .
    # . . . .
    . . . . .
    `)
basic.showIcon(IconNames.Yes)
Inicio()
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Blue))
basic.pause(2000)
