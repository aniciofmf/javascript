var numbers = {
	*[Symbol.iterator]({ start = 0, stop = 100, step = 1 } = {}) {
		for (let num = start; num <= stop; num += step) {
			yield num;
		}
	},
};

for (let num of numbers) {
	console.log(num);
}

console.log(
	`Numbers are: ${[
		...numbers[Symbol.iterator]({
			start: 6,
			stop: 30,
			step: 4,
		}),
	]}`
);
