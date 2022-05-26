function callTimes() {
	let counter = 0;
	return () => {
		++counter;
		console.log(counter);
		return counter;
	};
}

let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
myNewFunc1(); // => 1
myNewFunc1(); // => 2
myNewFunc2(); // => 1
myNewFunc2(); // => 2
