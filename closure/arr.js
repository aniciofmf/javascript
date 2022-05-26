function rollCall(names) {
	if (!Array.isArray(names)) {
		throw new Error("Not an array");
	}
	let numEls = 0;
	return function callEl() {
		if (numEls <= names.length - 1) {
			console.log(names[numEls]);
			numEls++;
		} else {
			console.log("Everyone accounted for");
		}
	};
}

// /*** Uncomment these to check your work! ***/
// const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
// rollCaller() // => should log 'Victoria'
// rollCaller() // => should log 'Juan'
// rollCaller() // => should log 'Ruth'
// rollCaller() // => should log 'Everyone accounted for'
