function nextIterator(arr) {
	var index = 0;
	function next() {
		return arr[index++];
	}

	return {
		next,
	};
}

const array3 = [1, 2, 3];
const iteratorWithNext = nextIterator(array3);
console.log(iteratorWithNext.next()); // -> should log 1
console.log(iteratorWithNext.next()); // -> should log 2
console.log(iteratorWithNext.next()); // -> should log 3
