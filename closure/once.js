function once(func) {
	let res = null;
	return function (n) {
		if (res === null) {
			res = func(n);
		}

		return res;
	};
}

const onceFunc = once(addByTwo);
console.log(onceFunc(4));
console.log(onceFunc(10));
console.log(onceFunc(9001));
