function cycleIterator(array) {
	let counter = 0;
	return function () {
		return array[counter < array.length ? counter++ : 0];
	};
}

const threeDayWeekend = ["Fri", "Sat", "Sun"];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay());
console.log(getDay());
console.log(getDay());
console.log(getDay());
