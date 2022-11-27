/**
 * 
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"} names 
 */

function likes(names) {
	let out = "";
	if (names.length === 0) return "no one likes this";
	if (names.length === 1) return `${names[0]} likes this`;

	let res = names.reduce((prev, curr, i) => {
		if (names.length == 2) {
			if (i == 0) {
				out = out.concat(curr);
			}
			if (i == 1) {
				out = out.concat(" and ").concat(curr).concat(" like this");
			}
		} else if (names.length == 3) {
			if (i == 0) {
				out = out.concat(curr).concat(", ");
			}
			if (i == 1) {
				out = out.concat(curr);
			}

			if (i == 2) {
				out = out.concat(" and ").concat(curr).concat(" like this");
			}
		} else {
			if (i == 0) {
				out = out.concat(curr).concat(", ");
			}
			if (i == 1) {
				out = out
					.concat(curr)
					.concat(" and ")
					.concat(names.length - 2)
					.concat(" others like this");
			}
		}
		return out;
	}, []);

	return res;
}

function likes2(names) {
	return {
		0: "no one likes this",
		1: `${names[0]} likes this`,
		2: `${names[0]} and ${names[1]} like this`,
		3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
		4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
	}[Math.min(4, names.length)];
}

function likes3(names) {
	names.length === 0 && (names = ["no one"]);
	let [a, b, c, ...others] = names;
	switch (names.length) {
		case 1:
			return `${a} likes this`;
		case 2:
			return `${a} and ${b} like this`;
		case 3:
			return `${a}, ${b} and ${c} like this`;
		default:
			return `${a}, ${b} and ${others.length + 1} others like this`;
	}
}

let t1 = [];
let t2 = ["Peter"];
let t3 = ["Jacob", "Alex"];
let t4 = ["Max", "John", "Mark"];
let t5 = ["Alex", "Jacob", "Mark", "Max"];
let t6 = ["Alex", "Jacob", "Mark", "Max", "Dan"];

likes(t5);
/*console.log(likes(t4));
console.log(likes(t5)); */
