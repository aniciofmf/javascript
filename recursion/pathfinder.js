function pathFinder(obj, arr) {
	return arr.length === 1 ? obj[arr[0]] : pathFinder(obj[arr[0]], arr.slice(1));
}

const obj = {
	first: { second: { third: "finish" } },
	second: { third: "finish2" },
};
const arr = ["first", "second", "third"];
console.log(pathFinder(obj, arr)); //-> "finish"

const arr2 = ["second", "third"];
console.log(pathFinder(obj, arr2)); //-> "finish2"
