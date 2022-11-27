var getSquare = (n) => {
	let square = 0;

	while (n != 0) {
		square += (n % 10) * (n % 10);
		n = parseInt(n / 10);
	}
	return square;
};

var isHappy = function (n) {
	let n1, n2;
	n1 = n2 = n;

	do {
		n1 = getSquare(n1);
		n2 = getSquare(n2);
	} while (n1 != n2);

	return n1 == 1 ? true : false;
};

console.log(isHappy(12222));
