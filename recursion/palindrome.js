function palindrome(string) {
	string = cleanString(string);

	let length = string.length;
	if (length === 0 || length === 1) {
		return true;
	}

	if (string[0] === string[length - 1]) {
		return palindrome(string.slice(1, -1));
	}

	return false;

	function cleanString(str) {
		str = str.replaceAll(" ", "");
		str = str.replaceAll(",", "");
		str = str.replaceAll("-", "");
		str = str.toLowerCase();
		return str;
	}
}
console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
console.log(palindrome("llama mall")); //-> true
console.log(palindrome("jmoney")); //-> false
