function setIterator(set) {
	var setArray = Array.from(set);
	var index = 0;
	function next() {
		return setArray[index++];
	}

	return {
		next,
	};
}

const mySet = new Set("hey");
const iterateSet = setIterator(mySet);
console.log(iterateSet.next()); // -> should log 'h'
console.log(iterateSet.next()); // -> should log 'e'
console.log(iterateSet.next()); // -> should log 'y'
