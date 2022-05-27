function majority(array, callback) {
	let counterTrue = 0,
		counterFalse = 0;

	for (let i = 0; i < array.length; i++) {
		if (callback(array[i])) {
			counterTrue++;
		} else {
			counterFalse++;
		}
	}

	return counterTrue > counterFalse;
}

const isOdd = function (num) {
	return num % 2 === 1;
};
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false
