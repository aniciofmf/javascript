var pTriangle = [];

var factorial = function (n) {
	if (n == 0) {
		return 1;
	}

	return n * factorial(n - 1);
};

var combFn = function (c, r) {
	return factorial(c) / (factorial(r) * factorial(c - r));
};

var generate = function (numRows) {
	if (numRows > 0 && numRows <= 30) {
		var arr = [];

		for (var c = 0; c < numRows; c++) {
			for (var r = 0; r <= c; r++) {
				arr.push(combFn(c, r));
			}
			pTriangle.push(arr);
			arr = [];
		}
	}

	return pTriangle;
};

var getRow = function (rowIndex) {
	if (rowIndex >= 0 && rowIndex <= 33) {
		if (Array.isArray(pTriangle)) {
			return pTriangle[rowIndex];
		}
	}
};

var triangle = generate(5);
console.log(triangle);
console.log(getRow(2));
