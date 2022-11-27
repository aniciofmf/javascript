//User function Template for javascript

var StackDS = (function () {
	function StackDS() {
		this.storage = [];
	}
	StackDS.prototype.push = function (item) {
		this.storage.push(item);
	};
	StackDS.prototype.pop = function () {
		return this.storage.pop();
	};
	StackDS.prototype.peek = function () {
		return this.storage[this.size() - 1];
	};
	StackDS.prototype.size = function () {
		return this.storage.length;
	};
	StackDS.prototype.empty = function () {
		return this.storage.length === 0;
	};
	return StackDS;
})();

function getMax(stack1, stack2) {
	var max = -Infinity;
	if (stack1.size() > 0) {
		max = Math.max(max, stack1.peek().max);
	}
	if (stack2.size() > 0) {
		max = Math.max(max, stack2.peek().max);
	}

	return max;
}

function deleteElement(stack1, stack2) {
	if (stack1.size() > 0) {
		stack1.pop();
	} else {
		while (!stack2.empty()) {
			var value = stack2.peek();
			if (value !== undefined) {
				insertElement(stack1, value.data);
			}
			stack2.pop();
		}
		stack1.pop();
	}
}

function insertElement(stack2, value) {
	var newNode = { data: 0, max: 0 };
	newNode.data = value;
	if (stack2.empty()) {
		newNode.max = value;
	} else {
		var frontNode = stack2.peek();
		if (frontNode !== undefined) {
			newNode.max = Math.max(value, frontNode.max);
		}
	}
	stack2.push(newNode);
}

function max_of_subarrays(arr, n, k) {
	var stack1 = new StackDS();
	var stack2 = new StackDS();

	var maxs = [];
	for (let i = 0; i < k - 1; i++) {
		insertElement(stack2, arr[i]);
	}

	console.log("\n");
	for (let i = 0; i <= n - k; i++) {
		if (i - 1 >= 0) {
			deleteElement(stack1, stack2);
		}

		insertElement(stack2, arr[i + k - 1]);
		maxs.push(getMax(stack1, stack2));
	}
	return maxs;
}

let arr = [1, 2, 3, 1, 4, 5, 2, 3, 6];
let n = 9;
let k = 3;
max_of_subarrays(arr, n, k);
