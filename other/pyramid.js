export default function pyramid(n) {
	let limit = n + n - 1;

	let hashesToPrint = 1;
	for (let i = 0; i < n; i++) {
		let difference = (limit - hashesToPrint) / 2;

		let spaces = " ".repeat(difference);

		let pounds = "#".repeat(hashesToPrint);

		let newString = spaces + pounds + spaces;

		console.log(newString);

		hashesToPrint += 2;
	}
}
