const personObj = {
	greet: function () {
		console.log("hello");
	},
	introduce: function () {
		console.log(`Hi my name is ${this.name}`);
	},
};

function createPerson(name, age) {
	const objPerson = Object.create(personObj);
	objPerson.name = name;
	objPerson.age = age;

	return objPerson;
}

const nPerson = createPerson("John", 23);

console.log(nPerson.name); // -> Logs 'Sandra'
console.log(nPerson.age); //-> Logs 26
nPerson.greet();
nPerson.introduce();
