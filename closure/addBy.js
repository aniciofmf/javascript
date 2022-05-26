function addByX(x) {
	return function (number) {
		return number + x;
	};
}

const addByTwo = addByX(2);
console.log(addByTwo(1));
console.log(addByTwo(2));

const addByThree = addByX(3);
console.log(addByThree(1));
console.log(addByThree(2));

const addByFour = addByX(4);
console.log(addByFour(4));
console.log(addByFour(5));
