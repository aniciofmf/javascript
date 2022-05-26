function average() {
	let numbers = [];
	return function (n = null) {
		if (n !== null) {
			numbers.push(n);
		}

		if (numbers.length == 0) {
			return 0;
		} else {
			return numbers.reduce((prev, cur) => prev + cur, 0) / numbers.length;
		}
	};
}

const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8
