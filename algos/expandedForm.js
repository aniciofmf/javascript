/*

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(expandedForm(12), '10 + 2');
    assert.strictEqual(expandedForm(42), '40 + 2');
    assert.strictEqual(expandedForm(70304), '70000 + 300 + 4');
  });
});

*/

function expandedForm(num) {
	let str = String(num);
	let sumStr = [];

	for (let i = 0; i < str.length; i++) {
		if (str[i] !== "0") {
			if (i === str.length - 1) {
				sumStr.push(str[i]);
			} else {
				sumStr.push(str[i] + "0".repeat(str.length - 1 - i));
			}
		}
	}

	return sumStr.join(" + ").trim();
}

const expandedForm = (n) =>
	n
		.toString()
		.split("")
		.reverse()
		.map((a, i) => a * Math.pow(10, i))
		.filter((a) => a > 0)
		.reverse()
		.join(" + ");
