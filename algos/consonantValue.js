const ALPHABET = {
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

function solve(s) {
	let vowels = ["a", "e", "i", "o", "u"];
	let str = s,
		sum = 0,
		maxsum = 0;

	for (var i = 0; i < str.length; i++) {
		if (!vowels.includes(str[i])) {
			sum += ALPHABET[str[i]];
		} else {
			if (sum >= maxsum) {
				maxsum = sum;
			}

			sum = 0;
		}
	}

	return maxsum === 0 ? sum : maxsum;
}

function solve(s) {
	let highest = 0;
	let sum = 0;

	for (const char of s) {
		if (isConsonant(char)) {
			sum += getValue(char);

			if (highest < sum) {
				highest = sum;
			}
		} else {
			sum = 0;
		}
	}

	return highest;
}

function getValue(char) {
	return char.charCodeAt(0) - 97 + 1;
}

function isConsonant(char) {
	return !"aeiou".includes(char);
}
