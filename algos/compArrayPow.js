function comp(array1, array2) {
	let numInSet = true;
	let arrayAux = [];

	if (array1 === null || array2 === null) return false;

	for (let i = 0; i < array1.length; i++) {
		let numsquared = Math.pow(array1[i], 2);
		arrayAux[i] = numsquared;
	}

	arrayAux.sort();
	array2.sort();

	for (let i = 0; i < array2.length; i++) {
		if (arrayAux[i] != array2[i]) {
			numInSet = false;
			break;
		}
	}

	return numInSet;
}

function comp(array1, array2) {
	if (array1 == null || array2 == null) return false;
	array1.sort((a, b) => a - b);
	array2.sort((a, b) => a - b);
	return array1.map((v) => v * v).every((v, i) => v == array2[i]);
}
