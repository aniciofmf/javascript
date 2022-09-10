/* Lets put it in this way */

const Main = (() => {
	let hook = [];
	let hookIndex = 0;

	const useState = (initialValue = 0) => {
		const closureIndex = hookIndex;
		hookIndex++;

		hook[closureIndex] = initialValue;

		const setState = (newValue) => {
			hook[closureIndex] = newValue;
		};

		return [hook[closureIndex], setState];
	};

	const clearIndex = () => {
		hookIndex = 0;
	};

	return {
		useState,
		clearIndex,
	};
})();

const { useState, clearIndex } = Main;

const testComponent = (value) => {
	const [counter, setCounter] = useState(value);

	setCounter(value);

	console.log(counter);
};

testComponent();
clearIndex();
testComponent(20);
clearIndex();
testComponent(100);
clearIndex();
/* Conclusion: long live to the closure pattern (?) */
