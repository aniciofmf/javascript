function* createConversation(text) {
	yield setTimeout(() => {
		if (text === "english") {
			console.log("hello world");
		} else {
			console.log("gibberish");
		}
	}, 3000);
}

var cc = createConversation("english");
cc.next();
