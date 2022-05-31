function customfn(array, callback) {
	let index = -1;

	for (let i = 0; i < array.length; i++) {
		if (callback(array[i])) {
			index = i;
			break;
		}
	}

	return index;
}

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
	return num % 2 !== 0;
}

console.log(customfn(numbers, isOdd)); // Output should be 1
console.log(customfn(evens, isOdd)); // Output should be -1
