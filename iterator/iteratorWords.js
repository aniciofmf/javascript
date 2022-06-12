function Words(string) {
	this.str = string;
}

Words.prototype[Symbol.iterator] = function () {
	let words = this.str.split(" ");
	let count = 0;
	let limit = words.length;
	return {
		next() {
			if (count < limit) {
				return { value: words[count++], done: false };
			}
			return { value: undefined, done: true };
		},
	};
};

const helloWorld = new Words("Hello World");
for (let word of helloWorld) {
	console.log(word);
}
