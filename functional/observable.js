"use strict";

const countdownLength = 10;

var timer = rxjs.interval(1000).pipe(rxjs.operators.take(countdownLength));
var timerC = rxjs.merge(rxjs.of(-1), timer).pipe(rxjs.operators.map((v) => format(v)));

timerC.subscribe(console.log.bind(console), null, console.log.bind(console, "Done!"));

function format(counter) {
	return formatTime(countdownLength - counter - 1);
}

function formatTime(time) {
	var minutes = Math.floor(time / 60);
	var seconds = time % 60;
	if (seconds < 10) seconds = `0${seconds}`;
	return `${minutes}:${seconds}`;
}
