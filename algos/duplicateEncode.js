/*

describe("Duplicate Encoder", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(duplicateEncode("din"),"(((");
    assert.strictEqual(duplicateEncode("recede"),"()()()");
    assert.strictEqual(duplicateEncode("Success"),")())())","should ignore case");
    assert.strictEqual(duplicateEncode("(( @"),"))((");
  });
});

*/
function duplicateEncode(word) {
	let encoded = [];
	let words = word.split("");

	for (let i = 0; i < words.length; i++) {
		let count = countLetterInWord(word[i].toLowerCase());

		if (count === 1) {
			encoded.push("(");
		} else {
			encoded.push(")");
		}
	}

	return encoded.join("");

	//////////////////////////////////////
	function countLetterInWord(letter) {
		let count = 0;
		words.forEach((element) => {
			if (element.toLowerCase() === letter) {
				count++;
			}
		});

		return count;
	}
}

function duplicateEncode(word) {
	return word
		.toLowerCase()
		.split("")
		.map(function (a, i, w) {
			return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
		})
		.join("");
}

let str = "Success";
duplicateEncode(str);
