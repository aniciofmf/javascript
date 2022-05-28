function isPrime(num) {
	let naux = num - 1;

	return (function verifyPrime(naux) {
		if (num === 0 || num === 1) {
			return false;
		}

		if (num === 2 || naux == 1) {
			return true;
		}

		if (num % naux !== 0) {
			return verifyPrime(naux - 1);
		}

		return false;
	})(naux);
}

console.log(isPrime(1)); //-> false
console.log(isPrime(7)); //-> true
console.log(isPrime(3)); //-> true
console.log(isPrime(4)); //-> false
console.log(isPrime(5)); //-> true
console.log(isPrime(6)); //-> false
console.log(isPrime(7)); //-> true
