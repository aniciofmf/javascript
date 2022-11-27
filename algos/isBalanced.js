function isBalanced(inputStr) {
	const status = false;
	const map = {
		"(": ")",
		"{": "}",
		"[": "]",
	};
	const char = [];

	for (let a = 0; a < inputStr.length; a++) {
		if (map[inputStr[a]]) {
			char.push(map[inputStr[a]]);
		} else {
			if (char.pop() !== inputStr[a]) {
				return status;
			}
		}
	}

	return char.length === 0;
}
