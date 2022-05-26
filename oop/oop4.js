const userFunctionStore = {
	sayType: function () {
		console.log(`Type: ${this.type}`);
	},
};

function userFactory(name, score) {
	let user = Object.create(userFunctionStore);
	user.type = "User";
	user.name = name;
	user.score = score;
	return user;
}

/* Copying Prototype */
const adminFunctionStore = {};
Object.setPrototypeOf(adminFunctionStore, userFunctionStore);

function adminFactory(name, score) {
	const adminObj = userFactory(name, score);
	adminObj.type = "Admin";
	/* Copying prototype to the object */
	Object.setPrototypeOf(adminObj, adminFunctionStore);
	return adminObj;
}

/* Adding method to the specific object type */

adminFunctionStore.sharePublicMessage = function () {
	console.log("Welcome Users!");
};

const adminFromFactory = adminFactory("John", 24);

adminFromFactory.sayType();
adminFromFactory.sharePublicMessage();

const userFromFactory = userFactory("Ana", 24);

userFromFactory.sayType();
//userFromFactory.sharePublicMessage(); // Not valid
