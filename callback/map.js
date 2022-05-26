function addN(num, n = 2) {
	return num + n;
}

function map(array, callback) {
	const result = [];

	if (!Array.isArray(array)) {
		throw new Error("Not an array");
	}

	for (let i = 0; i < array.length; i++) {
		result.push(callback(array[i]));
	}

	return result;
}

console.log(map([1, 2, 3], addN));
