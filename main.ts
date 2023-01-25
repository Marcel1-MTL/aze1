let Light_State = 0
input.onPinPressed(TouchPin.P0, function () {
    if (Light_State == 0) {
        Light_State = 3
        basic.showIcon(IconNames.Yes)
    } else {
        Light_State = 0
        basic.showIcon(IconNames.No)
    }
})
basic.forever(function () {
    if (Light_State == 1) {
        pins.digitalWritePin(DigitalPin.P0, pins.digitalReadPin(DigitalPin.P0))
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
