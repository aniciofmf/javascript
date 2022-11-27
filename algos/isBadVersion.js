var solution = function (isBadVersion) {
	/**
	 * @param {integer} n Total versions
	 * @return {integer} The first bad version
	 */
	return function (n) {
		let low = 1;
		let high = n;
		let mid = 0;
		let ans = -1;
		while (low <= high) {
			mid = low + Math.floor((high - low) / 2);
			if (isBadVersion(mid)) {
				high = mid - 1;
				ans = mid;
			} else low = mid + 1;
		}

		return ans;
	};
};
