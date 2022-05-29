// In this case Object.is() is being used to compare against -0 & NaN

function findAll(arg, array) {
	let res = [];

	for (let val of array) {
		if (Object.is(arg, val)) {
			res.push(val);
		} else if (val == null && arg == null) {
			res.push(val);
		} else if (typeof arg == "boolean") {
			// Strictly comparison between booleans
			if (arg === val) {
				res.push(val);
			}
		} else if (
			typeof arg == "string" &&
			arg.trim() != "" &&
			typeof val == "number" &&
			!Object.is(-0, val)
		) {
			if (arg == val) {
				res.push(val);
			}
		} else if (
			typeof arg == "number" &&
			!Object.is(arg, -0) &&
			!Object.is(arg, NaN) &&
			!Object.is(arg, Infinity) &&
			!Object.is(arg, -Infinity) &&
			typeof val == "string" &&
			val.trim() != ""
		) {
			if (arg == val) {
				res.push(val);
			}
		}
	}

	return res;
}

// tests:
var myObj = { a: 2 };

var values = [
	null,
	undefined,
	-0,
	0,
	13,
	42,
	NaN,
	-Infinity,
	Infinity,
	"",
	"0",
	"42",
	"42hello",
	"true",
	"NaN",
	true,
	false,
	myObj,
];

console.log(setsMatch(findAll(null, values), [null, undefined]) === true);
console.log(setsMatch(findAll(undefined, values), [null, undefined]) === true);
console.log(setsMatch(findAll(0, values), [0, "0"]) === true);
console.log(setsMatch(findAll(-0, values), [-0]) === true);
console.log(setsMatch(findAll(13, values), [13]) === true);
console.log(setsMatch(findAll(42, values), [42, "42"]) === true);
console.log(setsMatch(findAll(NaN, values), [NaN]) === true);
console.log(setsMatch(findAll(-Infinity, values), [-Infinity]) === true);
console.log(setsMatch(findAll(Infinity, values), [Infinity]) === true);
console.log(setsMatch(findAll("", values), [""]) === true);
console.log(setsMatch(findAll("0", values), [0, "0"]) === true);
console.log(setsMatch(findAll("42", values), [42, "42"]) === true);
console.log(setsMatch(findAll("42hello", values), ["42hello"]) === true);
console.log(setsMatch(findAll("true", values), ["true"]) === true);
console.log(setsMatch(findAll(true, values), [true]) === true);
console.log(setsMatch(findAll(false, values), [false]) === true);
console.log(setsMatch(findAll(myObj, values), [myObj]) === true);

console.log(setsMatch(findAll(null, values), [null, 0]) === false);
console.log(setsMatch(findAll(undefined, values), [NaN, 0]) === false);
console.log(setsMatch(findAll(0, values), [0, -0]) === false);
console.log(setsMatch(findAll(42, values), [42, "42hello"]) === false);
console.log(setsMatch(findAll(25, values), [25]) === false);
console.log(
	setsMatch(findAll(Infinity, values), [Infinity, -Infinity]) === false
);
console.log(setsMatch(findAll("", values), ["", 0]) === false);
console.log(setsMatch(findAll("false", values), [false]) === false);
console.log(setsMatch(findAll(true, values), [true, "true"]) === false);
console.log(setsMatch(findAll(true, values), [true, 1]) === false);
console.log(setsMatch(findAll(false, values), [false, 0]) === false);

// ***************************

function setsMatch(arr1, arr2) {
	if (
		Array.isArray(arr1) &&
		Array.isArray(arr2) &&
		arr1.length == arr2.length
	) {
		for (let v of arr1) {
			if (!arr2.includes(v)) return false;
		}
		return true;
	}
	return false;
}
