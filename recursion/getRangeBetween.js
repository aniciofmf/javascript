function getRangeBetween(x, y) {
	if (x == y) {
		return [];
	}

	if (x > y) {
		return [x].concat(getRangeBetween(x - 1, y));
	}

	if (x < y) {
		return [x].concat(getRangeBetween(x + 1, y));
	}

	return x;
}

console.log(getRangeBetween(2, 9)); //-> [3, 4, 5, 6, 7, 8]
console.log(getRangeBetween(-5, 5)); //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]
