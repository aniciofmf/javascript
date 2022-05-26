function Person() {
	this.greet = function () {
		console.log("hello");
	};
}

const person1 = new Person();
person1.greet(); // -> Logs 'hello'

function PersonFactory(name, age) {
	this.name = name;
	this.age = age;
}

PersonFactory.prototype.greet = function () {
	console.log("hello");
};

PersonFactory.prototype.introduce = function () {
	console.log(`Hello my name is ${this.name}`);
};

const person2 = new PersonFactory("Tim", 23);

console.log(person2.name); // -> Logs 'Mike'
console.log(person2.age); //-> Logs 30
person2.greet(); //-> Logs 'hello'
person2.introduce();
