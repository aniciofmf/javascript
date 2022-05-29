function countWaysToReachNthStair(n) {
	debugger;

	if (n == 1) return 1;
	if (n == 2) return 2;
	return countWaysToReachNthStair(n - 1) + countWaysToReachNthStair(n - 2);
}

//console.log(countWaysToReachNthStair(1)); //-> 1 (only one way to climb 1 stair)
//console.log(countWaysToReachNthStair(2)); //-> 2 ((1, 1), (2))
console.log(countWaysToReachNthStair(4)); //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))
