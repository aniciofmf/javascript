function pipe(arrOfFuncs, value) {
	let output = value;

	for (let i = 0; i < arrOfFuncs.length; i++) {
		output = arrOfFuncs[i](output);
	}

	return output;
}

const capitalize = (str) => str.toUpperCase();
const addLowerCase = (str) => str + str.toLowerCase();
const repeat = (str) => str + str;
const capAddlowRepeat = [capitalize, addLowerCase, repeat];
console.log(pipe(capAddlowRepeat, "cat")); // should log: 'CATcatCATcat'
