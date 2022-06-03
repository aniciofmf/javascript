function findInOrderedSet(arr, target) {
	if (arr.length == 0 || !arr.includes(target)) {
		return false;
	}

	if (target >= arr[0] && arr.includes(target)) {
		return true;
	}

	return findInOrderedSet(arr.slice(1), target);
}

// Assumption, array is ordered.

const nums = [1, 4, 6, 7, 9, 17, 45];

console.log(findInOrderedSet(nums, 4)); //-> true
console.log(findInOrderedSet(nums, 2)); //-> false
