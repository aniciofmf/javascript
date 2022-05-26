function debounce(callback, interval) {
	let callbackExecuted = false;
	let counter = 0;

	return function () {
		let intervalId = undefined;
		if (!callbackExecuted) {
			intervalId = setInterval(() => counter++, 1);
			callbackExecuted = true;
			return callback();
		} else {
			clearInterval(intervalId);
			intervalId = setInterval(() => counter++, 1);
			if (counter < interval) {
				return undefined;
			} else {
				return callback();
			}
		}
	};
}

function giveHi() {
	return "hi";
}
const giveHiSometimes = debounce(giveHi, 3000);
console.log(giveHiSometimes()); // -> 'hi'
setTimeout(function () {
	console.log(giveHiSometimes());
}, 2000); // -> undefined
setTimeout(function () {
	console.log(giveHiSometimes());
}, 4000); // -> undefined
setTimeout(function () {
	console.log(giveHiSometimes());
}, 8000); // -> 'hi'
