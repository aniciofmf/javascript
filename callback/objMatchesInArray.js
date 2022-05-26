function objOfMatches(array1, array2, callback) {
	let result = {};

	if (!Array.isArray(array1) || !Array.isArray(array2)) {
		throw new Error("Not an array");
	}

	if (array1.length != array2.length) {
		throw new Error("The arrays have different lengths");
	}

	for (let i = 0; i < array1.length; i++) {
		let rcb = callback(array1[i]);

		if (rcb == array2[i]) {
			result[array1[i]] = rcb;
		}
	}

	return result;
}

console.log(
	objOfMatches(
		["hi", "howdy", "bye", "later", "hello"],
		["HI", "Howdy", "BYE", "LATER", "hello"],
		function (str) {
			return str.toUpperCase();
		}
	)
);
