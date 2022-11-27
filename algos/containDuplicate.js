let nums = [1, 2, 3, 1];
let nums2 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

var containsDuplicate = function (nums) {
	let i = 1;
	nums.sort((a, b) => a - b);

	while (i < nums.length) {
		if (nums[i - 1] == nums[i]) return true;
		i++;
	}

	return false;
};
