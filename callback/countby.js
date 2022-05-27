function countBy(array, callback) {
	let outputObj = {};

	for (let i = 0; i < array.length; i++) {
		let cb = callback(array[i]);
		outputObj[cb] =
			outputObj[cb] === undefined ? 1 : (outputObj[cb] = outputObj[cb] + 1);
	}

	return outputObj;
}

console.log(
	countBy([1, 2, 3, 4, 5], function (num) {
		if (num % 2 === 0) return "even";
		else return "odd";
	})
); // should log: { odd: 3, even: 2 }
