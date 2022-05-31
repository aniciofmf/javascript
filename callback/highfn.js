function highfn(objOfFuncs, subject) {
	let max = 0,
		returnKey = null;

	for ([key, _] of Object.entries(objOfFuncs)) {
		let actual = objOfFuncs[key](subject);
		if (actual > max) {
			max = actual;
			returnKey = key;
		}
	}

	return returnKey;
}

const groupOfFuncs = {};
groupOfFuncs.double = (n) => n * 2;
groupOfFuncs.addTen = (n) => n + 10;
groupOfFuncs.inverse = (n) => n * -1;
console.log(highfn(groupOfFuncs, 5)); // should log: 'addTen'
console.log(highfn(groupOfFuncs, 11)); // should log: 'double'
console.log(highfn(groupOfFuncs, -20)); // should log: 'inverse'
