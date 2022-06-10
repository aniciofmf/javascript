function iteratorIndex(arr) {
	var index = 0;
	function next() {
		result = [arr.indexOf(arr[index]), arr[index]];
		index++;
		return result;
	}

	return {
		next,
	};
}

const array5 = ["a", "b", "c", "d"];
const iteratorWithIndex = iteratorIndex(array5);
console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
console.log(iteratorWithIndex.next()); // -> should log [2, 'c']
