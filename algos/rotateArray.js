let nums = [-1, -100, 3, 99];
let nums2 = [1, 2, 3, 4, 5, 6, 7];
let k = 2;
let k2 = 3;
var rotate = function (nums, k) {
	if (nums.length === 0) return nums;

	for (let i = 0; i < k; i++) {
		nums.unshift(nums.pop());
	}

	return nums;
};

var rotate2 = (nums, k) => nums.slice(k).concat(nums.slice(0, k));
var rotate3 = function (nums, k) {
	function reverse(arr, start, end) {
		while (start < end) {
			[arr[start], arr[end]] = [arr[end], arr[start]];
			start++;
			end--;
		}
	}

	k %= nums.length;

	reverse(nums, 0, nums.length - 1);
	reverse(nums, 0, k - 1);
	reverse(nums, k, nums.length - 1);

	return nums;
};
