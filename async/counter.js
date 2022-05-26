function delay(target, wait) {
	return function () {
		let i = 1;
		const id = setInterval(() => {
			console.log(i);
			i++;
			if (i > target) clearInterval(id);
		}, wait);
	};
}

const countLogger = delay(3, 1000);
countLogger();
