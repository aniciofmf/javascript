function change() {
	const objDict = {};
	return function (...args) {
		if (args.length > 1) {
			objDict[args[0]] = args[1];
		} else {
			for (const item of Object.entries(objDict)) {
				args[0] = args[0].replaceAll(item[0], item[1]);
			}
			return args[0];
		}
	};
}

const changeScene = change();
changeScene("dogs", "cats");
changeScene("quick", "slow");
console.log(changeScene("The quick, brown fox jumps over the lazy dogs."));
