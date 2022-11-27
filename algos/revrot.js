function revrot(str, sz) {
	if (sz <= 0 || str.length === 0 || sz > str.length) {
		return "";
	}

	let counter = 0;
	let numberCalc = 0;

	let numberStr = "";
	let strArr = [];

	str.split("").forEach((e, _) => {
		counter++;
		numberStr += e;
		numberCalc += Math.pow(e, 3);
		if (counter == sz) {
			if (numberCalc % 2 === 0) {
				numberStr = numberStr.split("").reverse();
			} else {
				numberStr = numberStr.split("");
				let n = numberStr.shift();
				numberStr[numberStr.length] = n;
			}

			numberStr = numberStr.join("");
			strArr.push(numberStr);

			counter = 0;
			numberStr = "";
			numberCalc = 0;
		}
	});

	return strArr.join("");
}

function cubeSum(string) {
	return string
		.split("")
		.map((e) => Math.pow(Number(e), 3))
		.reduce((p, c) => (p += c));
}

function revrotEach(string) {
	if (cubeSum(string) % 2 === 0) {
		return string.split("").reverse().join("");
	} else {
		return string.slice(1) + string.slice(0, 1);
	}
}

function revrot(str, sz) {
	if (sz === 0 || str.length < sz) {
		return "";
	} else {
		var arr = [];
		for (var c = 0; c < str.length; c += sz) {
			arr.push(str.slice(c, c + sz));
		}
		return arr
			.filter((e) => e.length === sz)
			.map((e) => revrotEach(e))
			.join("");
	}
}

revrot("123456987654", 6);
