radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    serial.writeNumber(receivedNumber)
})
radio.setGroup(77)
serial.redirectToUSB()
basic.forever(function () {
	
})
