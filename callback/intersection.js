function intersection(arrays) {
	return arrays.reduce(function (acc, array) {
		return acc.filter(function (el) {
			return array.indexOf(el) !== -1;
		});
	});
}

console.log(
	intersection([
		[5, 10, 15, 20],
		[15, 88, 1, 5, 7],
		[1, 10, 15, 5, 20],
	])
);
