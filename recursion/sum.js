function sum(array) {
	return array.length === 0 ? 0 : array[0] + sum(array.slice(1));
}

console.log(sum([1, 1, 1]));
console.log(sum([1, 2, 3, 4, 5, 6]));
