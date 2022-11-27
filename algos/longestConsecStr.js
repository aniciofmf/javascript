/*
describe("longestConsec",function() {
it("Basic tests",function() { 
    testing(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
    testing(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
    testing(longestConsec([], 3), "")
    testing(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
    testing(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
    testing(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
    testing(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
    testing(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
    testing(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")
})})

*/

function longestConsec(strarr, k) {
	let copyArray = [...strarr];
	let n = copyArray.length;
	let prevStr = "",
		actStr = "";
	let prevCounterStr = 0,
		actualCounterStr = 0;

	if (n == 0 || k > n || k <= 0) {
		return "";
	}
	if (n == 1) {
		return copyArray[0];
	}

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < k; j++) {
			if (copyArray[j] !== undefined) {
				prevStr = prevStr.concat(copyArray[j]);
				actualCounterStr = prevStr.length;
			}
		}

		if (actualCounterStr > prevCounterStr) {
			actStr = prevStr;
			prevCounterStr = actualCounterStr;
		}

		copyArray.splice(0, 1);
		prevStr = "";
	}

	return actStr;
}

function longestConsec(strarr, k) {
	var longest = "";
	for (var i = 0; k > 0 && i <= strarr.length - k; i++) {
		var tempArray = strarr.slice(i, i + k);
		var tempStr = tempArray.join("");
		if (tempStr.length > longest.length) {
			longest = tempStr;
		}
	}
	return longest;
}

function longestConsec(strarr, k) {
	if (k <= 0 || k > strarr.length) {
		return "";
	}

	return strarr.reduce((long, item, i) => {
		const currString = strarr.slice(i, i + k).join("");
		return currString.length > long.length ? currString : long;
	}, "");
}

let string = ["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"];
let k = 3;
