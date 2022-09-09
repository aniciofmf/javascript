/* Lets put it in this way */

const Main = (() => {
	let hook = [];
	let hookIndex = 0;

	const useState = (initialValue) => {
		const closureIndex = hookIndex;
		hookIndex++;

		if (!hook[closureIndex]) {
			hook[closureIndex] = initialValue;
		}

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

const testComponent = () => {
	const [counter, setCounter] = useState(0);

	console.log(counter);

	setCounter(10);
};

testComponent();
clearIndex();
testComponent();

/* Conclusion: long live to the closure pattern (?) */
