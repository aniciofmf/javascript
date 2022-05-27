function multiMap(arrVals, arrCallbacks) {
	const outputObj = {};

	for (let i = 0; i < arrVals.length; i++) {
		outputObj[arrVals[i]] = [];
		for (let j = 0; j < arrCallbacks.length; j++) {
			outputObj[arrVals[i]].push(arrCallbacks[j](arrVals[i]));
		}
	}

	return outputObj;
}

console.log(
	multiMap(
		["catfood", "glue", "beer"],
		[
			function (str) {
				return str.toUpperCase();
			},
			function (str) {
				return str[0].toUpperCase() + str.slice(1).toLowerCase();
			},
			function (str) {
				return str + str;
			},
		]
	)
);
