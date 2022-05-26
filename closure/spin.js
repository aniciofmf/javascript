function roulette(num) {
	let spins = num;
	return function () {
		let str = null;
		if (spins - 1 >= 1) {
			str = "spin";
		} else if (spins - 1 == 0) {
			str = "win";
		} else {
			str = "pick a number to play again";
		}

		spins--;
		return str;
	};
}

const play = roulette(3);
console.log(play()); // =>  log 'spin'
console.log(play()); // =>  log 'spin'
console.log(play()); // =>  log 'win'
console.log(play()); // =>  log 'pick a number to play again'
console.log(play()); // =>  log 'pick a number to play again'
