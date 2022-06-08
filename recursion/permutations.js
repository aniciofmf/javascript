// Recursive
function getPermutations(arr) {
	var result = [];

	const permute = (arr, m = []) => {
		if (arr.length === 0) {
			result.push(m);
		} else {
			for (var i = 0; i < arr.length; i++) {
				let curr = arr.slice();
				let next = curr.splice(i, 1);

				permute(curr.slice(), m.concat(next));
			}
		}
	};

	permute(arr);

	return result;
}

// Iterative
function getPermutationsI(arr) {
	var permutations = [];
	if (arr.length === 1) {
		return [arr];
	}
	for (var i = 0; i < arr.length; i++) {
		var subPerms = getPermutationsI(arr.slice(0, i).concat(arr.slice(i + 1)));
		for (var j = 0; j < subPerms.length; j++) {
			subPerms[j].unshift(arr[i]);
			permutations.push(subPerms[j]);
		}
	}
	return permutations;
}

console.log(getPermutationsI([1, 2])); //-> [[1, 2], [2, 1]]
console.log(getPermutations([1, 2, 3])); //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
