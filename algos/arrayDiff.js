/**
    arrayDiff([1,2],[1]) == [2]
    arrayDiff([1,2,2,2,3],[2]) == [1,3]
    assert.deepEqual(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
    assert.deepEqual(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
    assert.deepEqual(arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
    assert.deepEqual(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
    assert.deepEqual(arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
    assert.deepEqual(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")
 */
function arrayDiff(a, b) {
	let arrDif = [];

	if (a.length == 0) return [];
	if (b.length == 0) return a;

	arrDif = diffArray(a, b);

	return arrDif;

	///////////
	function diffArray(source1, source2) {
		let diff = [];

		source1.forEach((v, i) => {
			if (!source2.includes(v)) {
				diff.push(v);
			}
		});

		return diff;
	}
}

function array_diff(a, b) {
	return a.filter((e) => !b.includes(e));
}

arrayDiff([1, 2, 3], [1, 2]);
