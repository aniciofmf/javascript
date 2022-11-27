let nums = [-1, 3, 5, 6];
let target = 0;
var searchInsert = function (nums, target) {
	let left = 0;
	let right = nums.length - 1;
	let middle = 0;

	while (right >= left) {
		middle = left + Math.floor((right - left) / 2);

		if (nums[middle] == target) return middle;

		if (nums[middle] > target) right = middle - 1;

		if (nums[middle] < target) left = middle + 1;
	}

	if (target >= nums[middle]) return middle + 1;

	if (target < nums[middle]) return middle;
};

console.log(searchInsert(nums, target));
