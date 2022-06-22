let Score = 0
input.onPinPressed(TouchPin.P0, function () {
	
})
input.onButtonPressed(Button.A, function () {
    (music.playMelody("A E D E G D B F ", 120),SoundExpressionPlayMode.UntilDone)
Score += -1
})
input.onButtonPressed(Button.B, function () {
    Score += 1
})
basic.forever(function () {
    basic.showString("" + (Score))
    if (Score > 4) {
        (music.playMelody("C5 B B C5 B A C5 B ", 120),SoundExpressionPlayMode.UntilDone)
Score = 0
    }
    if (Score == -1) {
        Score = 0
    }
})
