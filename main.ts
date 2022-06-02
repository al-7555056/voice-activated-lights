let noise = 0
let light2 = 0
led.enable(false)
let strip = neopixel.create(DigitalPin.P1, 24, NeoPixelMode.RGB)
OLED.init(128, 64)
basic.forever(function () {
    light2 = smarthome.ReadLightIntensity(AnalogPin.P3)
    if (light2 < 50) {
        noise = smarthome.ReadNoise(AnalogPin.P2)
        if (noise > 70) {
            strip.showColor(neopixel.colors(NeoPixelColors.White))
            basic.pause(10000)
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
        }
    }
})
basic.forever(function () {
    OLED.writeString("light:")
    OLED.writeNum(light2)
    OLED.newLine()
    OLED.writeString("noise:")
    OLED.writeNum(noise)
    basic.pause(1000)
    OLED.clear()
})
