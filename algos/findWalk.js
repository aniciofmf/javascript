function isValidWalk(walk) {
	const coordinates = { n: 1, s: -1, e: 2, w: -2 };
	return walk.length == 10 && !walk.map((cord) => coordinates[cord]).reduce((a, b) => a + b);
}

console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
