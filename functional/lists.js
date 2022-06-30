"use strict";

var retFn = returnValFn(fn1());

function fn1() {
	return 10;
}

function fn2() {
	return 20;
}

function add(x, y) {
	return x + y;
}

function addFn(fn1, fn2) {
	return add(fn1(), fn2());
}

function returnValFn(value) {
	return function sameValue() {
		return value;
	};
}

function addnLoop(...fns) {
	while (fns.length > 2) {
		let [fn0, fn1, ...restFns] = fns;
		fns = [
			function f() {
				return addFn(fn0, fn1);
			},
			...restFns,
		];
	}

	return addFn(fns[0], fns[1]);
}

function addnRecursive(fn0, fn1, ...rest) {
	if (rest.length == 0) {
		return addFn(fn0, fn1);
	}

	return addnRecursive(function f() {
		return addFn(fn0, fn1);
	}, ...rest);
}

console.log(fn1() === 10);
console.log(fn2() === 20);
console.log(add(fn1(), fn2()) === 30);
console.log(addFn(fn1, fn2) === 30);
console.log(retFn(fn1()) === 10);
console.log(returnValFn(fn1())() === 10);
console.log(addnLoop(fn1, fn2, returnValFn(4), returnValFn(5)) === 39);
console.log(addnRecursive(returnValFn(10), returnValFn(80), returnValFn(4), returnValFn(5)) === 99);
