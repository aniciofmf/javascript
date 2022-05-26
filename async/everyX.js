function everyX(cb, interval, duration) {
	const id = setInterval(cb, interval * 1000);
	function clear() {
		clearInterval(id);
	}
	setTimeout(clear, duration * 1000);
}
function fn() {
	console.log("called");
}
everyX(fn, 2, 20);
