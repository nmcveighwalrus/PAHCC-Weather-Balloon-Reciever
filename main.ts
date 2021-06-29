radio.onReceivedString(function (receivedString) {
    inString = receivedString
    basic.showLeds(`
        # # # . .
        . . . # .
        # # . . #
        . . # . #
        # . # . #
        `)
    serial.writeLine(inString)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        . . # . .
        `)
})
let inString = ""
radio.setGroup(2)
serial.redirectToUSB()
serial.setTxBufferSize(64)
serial.setRxBufferSize(64)
basic.forever(function () {
	
})
