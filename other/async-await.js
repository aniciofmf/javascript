function getFile(file) {
	return new Promise(function (resolve) {
		fakeAjax(file, resolve);
	});
}

async function loadFiles(files) {
	var resolves = [];

	for (var i = 0; i < files.length; i++) {
		resolves[i] = await getFile(files[i]);
	}

	for (var i = 0; i < resolves.length; i++) {
		console.log(resolves[i]);
	}
}

async function loadFiles2(files) {
	var prs = files.map(getFile);

	for (let pr of prs) {
		console.log(await pr);
	}
}

loadFiles(["file1", "file2", "file3"]);

// **************************************

function fakeAjax(url, cb) {
	var fake_responses = {
		file1: "The first text",
		file2: "The middle text",
		file3: "The last text",
	};
	var randomDelay = (Math.round(Math.random() * 1e4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function () {
		cb(fake_responses[url]);
	}, randomDelay);
}
