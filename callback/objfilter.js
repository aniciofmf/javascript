function objFilter(obj, callback) {
	const outputObj = {};
	for ([key, val] of Object.entries(obj)) {
		if (key.toUpperCase() == val.toUpperCase()) {
			outputObj[key] = callback(val);
		}
	}

	return outputObj;
}

const cities = {
	London: "LONDON",
	LA: "Los Angeles",
	Paris: "PARIS",
	BSAS: "Buenos Aires",
	Frankfurt: "Frankfurt",
};

console.log(objFilter(cities, (city) => city.toUpperCase()));

function objFilter2(obj, callback) {
	const outputObj = {};
	for ([key, val] of Object.entries(obj)) {
		let cbr = callback(key);
		if (cbr == val) {
			outputObj[key] = val;
		}
	}

	return outputObj;
}

const startingObj = {};
startingObj[6] = 3;
startingObj[2] = 1;
startingObj[12] = 4;
const half = (n) => n / 2;
console.log(objFilter2(startingObj, half)); // should log: { 2: 1, 6: 3 }
