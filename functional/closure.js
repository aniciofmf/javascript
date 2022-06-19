function strBuilder(str) {
	return function builder(string) {
		if (typeof string == "string") {
			return strBuilder(str + string);
		}
		return str;
	};
}

var hello = strBuilder("Hello ");
var bob = hello("Susan");
var susan = hello("Bob!");
var john = hello("Bob");
var bobQuestion = hello("John you there?")();
var johnAnswer = john(" yep I'm here")();

console.log(strBuilder("Hello ")("")("World!")() === "Hello World!");
console.log(hello() === "Hello ");
console.log(bob() === "Hello Susan");
console.log(susan() === "Hello Bob!");
console.log(bobQuestion === "Hello John you there?");
console.log(johnAnswer === "Hello Bob yep I'm here");
