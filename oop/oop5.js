class Cow {
	constructor() {
		this.legs = 4;
	}
	speak() {
		console.log("Moo!");
	}
}

const Mixin = {
	skin: "bronze",
	speak: function () {
		console.log(`I have ${this.legs} legs and am made of ${this.skin}`);
	},
};

let android = new Cow();

/* Copy all the properties and methods to android */
android = Object.assign(android, Mixin);

android.speak();
