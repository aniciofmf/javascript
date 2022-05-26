class Clock {
	constructor(cb) {
		this.cb = cb;
		this.duration = 1;
		this.intervalId;
	}

	start() {
		this.intervalId = setInterval(() => {
			this.cb(this.duration++);
		}, 1000);
	}

	reset() {
		this.duration = 1;
		clearInterval(this.intervalId);
	}
}

const clock = new Clock((val) => {
	console.log(val);
});
console.log("Started Clock.");
clock.start();
setTimeout(() => {
	clock.reset();
	console.log("Stopped Clock after 6 seconds.");
}, 6000);
