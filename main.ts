radio.onReceivedNumber(function (receivedNumber) {
    inNum = receivedNumber
    serial.writeLine("" + (inNum))
})
radio.onReceivedString(function (receivedString) {
    inString = receivedString
    serial.writeLine(inString)
})
let packet = ""
let inString = ""
let inNum = 0
radio.setGroup(2)
serial.redirectToUSB()
serial.setTxBufferSize(64)
serial.setRxBufferSize(64)
basic.forever(function () {
    /*let packArr: string[] = []
    if (inNum < 6) {
        packArr[inNum] = inString
    }
    if (inNum == 5) {
        packet = "" + packArr[0] + "EST, " + packArr[1] + "N, " + packArr[2] + "W, " + packArr[3] + "M, " + packArr[4] + "°C, " + packArr[5] + "kPa"
        serial.writeLine(packet)
    }
    if (inNum == 6) {
        serial.writeLine("Invalid Packet")
    }*/
})
