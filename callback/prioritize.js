function prioritize(array, callback) {
	let outputArr = [];

	for (let i = 0; i < array.length; i++) {
		if (callback(array[i])) {
			outputArr.splice(0, 0, array[i]);
		} else {
			outputArr.push(array[i]);
		}
	}

	return outputArr;
}

const startsWithS = function (str) {
	return str[0] === "s" || str[0] === "S";
};
console.log(
	prioritize(
		["curb", "rickandmorty", "seinfeld", "sunny", "friends"],
		startsWithS
	)
);
