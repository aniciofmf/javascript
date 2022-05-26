Object.is = function (val1, val2) {
	let op1 = 1 / val1;
	let op2 = 1 / val2;

	if (
		typeof val1 === "number" &&
		val1.toString() === "NaN" &&
		typeof val2 === "number" &&
		val2.toString() === "NaN"
	) {
		return true;
	}

	if (op1 === -Infinity && op2 === -Infinity) {
		return true;
	}

	if (op1 === Infinity && op2 === -Infinity) {
		return false;
	}

	if (op1 === -Infinity && op2 === Infinity) {
		return false;
	}

	return val1 === val2;
};

console.log(Object.is(42, 42) === true);
console.log(Object.is("foo", "foo") === true);
console.log(Object.is(false, false) === true);
console.log(Object.is(null, null) === true);
console.log(Object.is(undefined, undefined) === true);
console.log(Object.is(NaN, NaN) === true);
console.log(Object.is(-0, -0) === true);
console.log(Object.is(0, 0) === true);

console.log(Object.is(-0, 0) === false);
console.log(Object.is(0, -0) === false);
console.log(Object.is(0, NaN) === false);
console.log(Object.is(NaN, 0) === false);
console.log(Object.is(42, "42") === false);
console.log(Object.is("42", 42) === false);
console.log(Object.is("foo", "bar") === false);
console.log(Object.is(false, true) === false);
console.log(Object.is(null, undefined) === false);
console.log(Object.is(undefined, null) === false);
