function blackjack(array) {
	let cardUsed = 0;
	let state = null;

	return function dealer(arg1, arg2) {
		let playerInvoke = 0;
		let sumDealerArgs = arg1 + arg2;
		return function player() {
			if (playerInvoke == 0) {
				playerInvoke++;
				state = null;
			} else {
				sumDealerArgs += array[cardUsed];

				if (state === null) cardUsed++;
			}

			if (sumDealerArgs > 21 && state == null) {
				state = "bust";
				return state;
			}

			if (state == "bust") {
				return "you are done!";
			}

			return sumDealerArgs;
		};
	};
}

const deal = blackjack([
	2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11,
]);

/*** PLAYER 1 ***/
const i_like_to_live_dangerously = deal(4, 5);
console.log(i_like_to_live_dangerously());
console.log(i_like_to_live_dangerously());
console.log(i_like_to_live_dangerously());
console.log(i_like_to_live_dangerously());
console.log(i_like_to_live_dangerously());
console.log(i_like_to_live_dangerously());
console.log(i_like_to_live_dangerously());

/*** PLAYER 2 ***/
const i_TOO_like_to_live_dangerously = deal(2, 2);
console.log(i_TOO_like_to_live_dangerously());
console.log(i_TOO_like_to_live_dangerously());
console.log(i_TOO_like_to_live_dangerously());
console.log(i_TOO_like_to_live_dangerously());
console.log(i_TOO_like_to_live_dangerously());
console.log(i_TOO_like_to_live_dangerously());

/*** PLAYER 3 ***/
const i_ALSO_like_to_live_dangerously = deal(3, 7);
console.log(i_ALSO_like_to_live_dangerously());
console.log(i_ALSO_like_to_live_dangerously());
console.log(i_ALSO_like_to_live_dangerously());
console.log(i_ALSO_like_to_live_dangerously());
console.log(i_ALSO_like_to_live_dangerously());
