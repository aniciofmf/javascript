/**
 * 
 const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
  });
});

 */
var uniqueInOrder = function (iterable) {
	let iterableAux = iterable;
	let unique = [];

	if (!Array.isArray(iterable)) {
		iterableAux = Array.from(iterable);
	}

	if (iterableAux.length === 0) return [];
	if (iterableAux.length === 1) return iterableAux;

	for (var i = 1; i < iterableAux.length; i++) {
		if (iterableAux[i] != iterableAux[i - 1]) {
			unique.push(iterableAux[i - 1]);
		}
	}

	if (iterableAux[i] != iterableAux[i - 1]) {
		unique.push(iterableAux[i - 1]);
	}

	return unique;
};

function uniqueInOrder(it) {
	var result = [];
	var last;

	for (var i = 0; i < it.length; i++) {
		if (it[i] !== last) {
			result.push((last = it[i]));
		}
	}

	return result;
}

var uniqueInOrder = function (iterable) {
	return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};

let uniqueArr = [1, 2, 3, 4, 5, 1, 2];
uniqueInOrder("A");
