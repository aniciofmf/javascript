function upper(strings, ...values) {
	var s = "";
	for (var i = 0; i < values.length; i++) {
		s += strings[i] + values[i].toUpperCase();
	}

	s += strings[i];

	return s;
}

var name = "bob",
	twitter = "bobtw",
	topic = "here";

console.log(upper`Hello ${name} (@${twitter}), welcome to ${topic}!`);
