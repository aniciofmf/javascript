/*
https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(findOutlier([0, 1, 2]), 1)
    Test.assertEquals(findOutlier([1, 2, 3]), 2)
    Test.assertEquals(findOutlier([2,6,8,10,3]), 3)
    Test.assertEquals(findOutlier([0,0,3,0,0]), 3)
    Test.assertEquals(findOutlier([1,1,0,1,1]), 0)
  });
});

*/
function findOutlier(integers) {
	let countOdd = 0,
		countEven = 0,
		outlier = 0;

	for (let i = 0; i < integers.length; i++) {
		if (integers[i] % 2 === 0) countEven++;
		else countOdd++;
	}

	if (countOdd > countEven) {
		outlier = integers.find((n) => n % 2 == 0);
	} else {
		outlier = integers.find((n) => n % 2);
	}
	return outlier;
}

function findOutlier(int) {
	var even = int.filter((a) => a % 2 == 0);
	var odd = int.filter((a) => a % 2 !== 0);
	return even.length == 1 ? even[0] : odd[0];
}
