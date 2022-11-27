function inArray(array1, array2) {
	return array1.filter((a1) => array2.find((a2) => a2.match(a1))).sort();
}
let a1 = ["arp", "live", "strong"];

let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

console.log(inArray(a1, a2));
