function head(n) {
	if (n == 0) {
		return;
	}

	head(n - 1);

	console.log(n);
}

function tail(n) {
	if (n == 0) {
		return;
	}

	console.log(n);

	tail(n - 1);
}
