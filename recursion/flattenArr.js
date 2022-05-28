function flattenArrNonRecursive(array) {
	array = array.slice(0);
	for (i = 0; i < array.length; i++) {
		if (Object.prototype.toString.call(array[i]) === "[object Array]") {
			Array.prototype.splice.apply(array, [i, 1].concat(array[i--]));
		}
	}
	return array;
}

function flattenArr(array) {
	return array.reduce(
		(acc, cur) => acc.concat(Array.isArray(cur) ? flattenArr(cur) : cur),
		[]
	);
}

console.log(flattenArr([1, [2, 3, [4]]]));
console.log(flattenArr([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]
