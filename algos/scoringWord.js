/**
 * 
  it("Testing for fixed tests", () => {
    assert.strictEqual(high('man i need a taxi up to ubud'), 'taxi');
    assert.strictEqual(high('what time are we climbing up the volcano'), 'volcano'); 
    assert.strictEqual(high('take me to semynak'), 'semynak');   
    assert.strictEqual(high('aa b'), 'aa');
    assert.strictEqual(high('b aa'), 'b');
    assert.strictEqual(high('bb d'), 'bb');
    assert.strictEqual(high('d bb'), 'd');
    assert.strictEqual(high('aaa b'), 'aaa');
  })
});} x 
 */
const fullAlphabet = {
	a: 1,
	b: 2,
	c: 3,
	d: 4,
	e: 5,
	f: 6,
	g: 7,
	h: 8,
	i: 9,
	j: 10,
	k: 11,
	l: 12,
	m: 13,
	n: 14,
	o: 15,
	p: 16,
	q: 17,
	r: 18,
	s: 19,
	t: 20,
	u: 21,
	v: 22,
	w: 23,
	x: 24,
	y: 25,
	z: 26,
};
const alphabet = new Map(Object.entries(fullAlphabet));

function high(x) {
	let wordsArr = [];
	let valueWordArr = [];
	let value = 0,
		str = "";

	x.split(" ").forEach((word, i) => {
		word.split("").forEach((w, _) => {
			str += w;
			value += alphabet.get(w);
		});

		wordsArr.push(str);
		valueWordArr.push(value);
		value = 0;
		str = "";
	});

	let maxValue = Math.max(...valueWordArr);
	let maxValuePosition = valueWordArr.findIndex((e) => e == maxValue);

	return wordsArr[maxValuePosition];
}

function high(words) {
	const alpha = " abcdefghijklmnopqrstuvwxyz";
	const score = (word) => word.split("").reduce((a, b) => a + alpha.indexOf(b), 0);

	return words
		.split(" ")
		.map((word, pos) => ({ word: word, pos: pos, score: score(word) }))
		.sort((a, b) => a.score - b.score || b.pos - a.pos)
		.pop().word;
}
