function combine(startVal, arrOfFuncs) {
	let initialVal = startVal;

	for (val in arrOfFuncs) {
		initialVal = arrOfFuncs[val](initialVal);
	}

	return initialVal;
}

function add100(num) {
	return num + 100;
}

function divByFive(num) {
	return num / 5;
}

function multiplyByThree(num) {
	return num * 3;
}

console.log(combine(0, [add100, divByFive, multiplyByThree])); // Should output 60
console.log(combine(0, [divByFive, multiplyByThree, add100])); // Should output 100
