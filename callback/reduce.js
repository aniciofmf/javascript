function reduce(array, callback, initialValue) {
	if (!Array.isArray(array)) {
		throw new Error("Not an array");
	}

	let accum = initialValue;

	for (let i = 0; i < array.length; i++) {
		accum = callback(accum, array[i]);
	}

	return accum;
}

const nums = [20, 30, 40];
const add = function (a, b) {
	return a + b;
};
console.log(reduce(nums, add, 0));
