let nums = [-4, -1, 0, 3, 10];
var sortedSquares = function (nums) {
	return nums.map((n) => Math.pow(n, 2)).sort((a, b) => a - b);
};

console.log(sortedSquares(nums));
