function union(arrays) {
	return arrays.reduce(function (acc, val) {
		return acc.concat(
			val.filter(function (num) {
				return acc.indexOf(num) === -1;
			})
		);
	});
}

console.log(
	union([
		[5, 10, 15, 20],
		[15, 88, 1, 5, 7],
		[1, 10, 15, 5, 20],
	])
);
