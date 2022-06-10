function nextIterator(arr) {
	var index = 0;
	function next() {
		return arr[index++];
	}

	return {
		next,
	};
}

function sumArray(arr) {
	var iterator = nextIterator(arr);
	var result = 0;
	var nextVal = iterator.next();

	while (nextVal != undefined) {
		result += nextVal;
		nextVal = iterator.next();
	}

	return result;
}

const array4 = [1, 2, 3, 4];
console.log(sumArray(array4)); // -> should log 10
