function spinWords(string) {
	let str = string.split(" ");
	let strOut = "";

	if (string.length < 5) return string;

	for (let i = 0; i < str.length; i++) {
		if (str[i].length >= 5) {
			strOut += reverseStr(str[i]) + " ";
		} else {
			strOut += str[i] + " ";
		}
	}

	return strOut.trim();

	//////////////
	function reverseStr(str) {
		let reversedStr = "";
		for (let i = str.length - 1; i >= 0; i--) {
			reversedStr += str[i];
		}

		return reversedStr;
	}
}
