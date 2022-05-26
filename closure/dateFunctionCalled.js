function dateStamp(func) {
	let outputObj = {};
	return function f1(...arg) {
		outputObj["date"] = new Date().toString();
		outputObj["output"] = func(...arg);

		return outputObj;
	};
}

const stampedMultBy2 = dateStamp((n) => n * 2);
console.log(stampedMultBy2(4));
console.log(stampedMultBy2(6));
