function promised(val) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(val);
		}, 20);
	});
}

const createPromise = promised("wait for it...");
createPromise.then((val) => console.log(val));
