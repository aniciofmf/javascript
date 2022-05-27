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
