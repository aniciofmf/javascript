let nums = [-1, 0, 3, 5, 9, 12];
let target = 9;
var search = function (nums, target) {
	let left = 0;
	let right = nums.length - 1;
	let middle = 0;

	while (right >= left) {
		middle = left + Math.floor((right - left) / 2);

		if (nums[middle] == target) return middle;

		if (nums[middle] > target) right = middle - 1;

		if (nums[middle] < target) left = middle + 1;

		console.log(left, right, middle);
	}

	return -1;
};

console.log(search(nums, target));
