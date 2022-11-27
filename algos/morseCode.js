const MORSE_CODE = {
	".-": "A",
	"-...": "B",
	"-.-.": "C",
	"-..": "D",
	".": "E",
	"..-.": "F",
	"--.": "G",
	"....": "H",
	"..": "I",
	".---": "J",
	"-.-": "K",
	".-..": "L",
	"--": "M",
	"-.": "N",
	"---": "O",
	".--.": "P",
	"--.-": "Q",
	".-.": "R",
	"...": "S",
	"-": "T",
	"..-": "U",
	"...-": "V",
	".--": "W",
	"-..-": "X",
	"-.--": "Y",
	"--..": "Z",
	"-----": "0",
	".----": "1",
	"..---": "2",
	"...--": "3",
	"....-": "4",
	".....": "5",
	"-....": "6",
	"--...": "7",
	"---..": "8",
	"----.": "9",
	".-.-.-": ".",
	"--..--": ",",
	"..--..": "?",
	".----.": "'",
	"-.-.--": "!",
	"-..-.": "/",
	"-.--.": "(",
	"-.--.-": ")",
	".-...": "&",
	"---...": "=>",
	"-.-.-.": ";",
	"-...-": "=",
	".-.-.": "+",
	"-....-": "-",
	"..--.-": "_",
	".-..-.": '"',
	"...-..-": "$",
	".--.-.": "@",
	"...---...": "SOS",
};

decodeMorse = function (morseCode) {
	let decoded = [];
	morseCode
		.trim()
		.split(" ")
		.forEach((e) => {
			if (!MORSE_CODE[e]) {
				decoded.push(MORSE_CODE[e]);
			} else {
				decoded.push(MORSE_CODE[e]);
			}
		});

	decoded.forEach((e, i) => {
		if (e === undefined && decoded[i - 1] != " ") {
			decoded[i] = " ";
		}
	});

	return decoded.join("").trim();
};

decodeMorse = function (morseCode) {
	return morseCode
		.trim()
		.split(" ")
		.map((a) => MORSE_CODE[a] || " ")
		.join("")
		.replace(/\s+/g, " ");
};
