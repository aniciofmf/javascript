function after(count, func) {
	let localCount = 0;
	return function called() {
		localCount++;
		if (localCount < count) {
			console.log("");
		} else {
			return func();
		}
	};
}

const called = function () {
	console.log("hello");
};
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed
