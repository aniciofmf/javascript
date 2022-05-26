function multiplyN(num, n = 2) {
	return num * n;
}

function forEach(array, callback) {
	if (!Array.isArray(array)) {
		throw new Error("Not an array");
	}

	for (let i = 0; i < array.length; i++) {
		callback(array[i]);
	}
}

let result = "";
const words = ["word1", " ", "word3"];
forEach(words, function (c) {
	result += c;
});
console.log(result);

function mapWith(array, callback) {
	const result = [];
	forEach(array, (item) => result.push(callback(item)));
	return result;
}

console.log(mapWith([1, 2, 3], multiplyN));
