function saveOutput(func, magicWord) {
	let loggedObj = {};
	return function f(magicWord) {
		if (Number.isInteger(magicWord)) {
			loggedObj[magicWord] = func(magicWord);
			return func(magicWord);
		} else {
			return loggedObj;
		}
	};
}

const multiplyBy2 = function (num) {
	return num * 2;
};
const multBy2AndLog = saveOutput(multiplyBy2, "boo");
console.log(multBy2AndLog(2));
console.log(multBy2AndLog(9));
console.log(multBy2AndLog("boo"));
