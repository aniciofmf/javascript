function defineFirstArg(func, arg) {
	return function (farg) {
		return func(arg, farg);
	};
}

const subtract = function (big, small) {
	return big - small;
};
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5));
