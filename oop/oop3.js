class PersonClass {
	constructor(name) {
		this.name = name;
	}

	greet() {
		console.log("Hello");
	}
}

const foo1 = new PersonClass();
foo1.greet(); // -> Logs 'hello'

class DeveloperClass extends PersonClass {
	introduce() {
		console.log(`Hello my name is ${this.name}`);
	}
}

const foo2 = new DeveloperClass("Foo2", 32);
console.log(foo2.name); // -> Logs 'Thai'
foo2.introduce(); //-> Logs 'Hello World, my name is Thai'
