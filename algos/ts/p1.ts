import { StackDS } from "./stack";

interface SNode {
	data: number;
	max: number;
}

function getMax(stack1: StackDS<SNode>, stack2: StackDS<SNode>) {
	let max = -Infinity;

	if (stack1.size() > 0) {
		max = Math.max(max, stack1.peek()!.max);
	}

	if (stack2.size() > 0) {
		max = Math.max(max, stack2.peek()!.max);
	}

	return max;
}

function deleteElement(stack1: StackDS<SNode>, stack2: StackDS<SNode>) {
	if (stack1.size() > 0) {
		stack1.pop();
	} else {
		while (!stack2.empty()) {
			let value: SNode | undefined = stack2.peek();
			if (value !== undefined) {
				insertElement(stack1, value.data);
			}
			stack2.pop();
		}

		stack1.pop();
	}
}

function insertElement(stack2: StackDS<SNode>, value: number) {
	let newNode: SNode = { data: 0, max: 0 };
	newNode.data = value;

	if (stack2.empty()) {
		newNode.max = value;
	} else {
		let frontNode: SNode | undefined = stack2.peek();

		if (frontNode !== undefined) {
			newNode.max = Math.max(value, frontNode.max);
		}
	}

	stack2.push(newNode);
}

function max_of_subarrays(arr: Array<number>, n: number, k: number) {
	let stack1: StackDS<SNode> = new StackDS<SNode>();
	let stack2: StackDS<SNode> = new StackDS<SNode>();
	let maxs = [];

	for (let i = 0; i < k - 1; i++) {
		insertElement(stack2, arr[i]);
	}

	for (let i = 0; i <= n - k; i++) {
		if (i - 1 >= 0) {
			deleteElement(stack1, stack2);
		}

		insertElement(stack2, arr[i + k - 1]);

		maxs.push(getMax(stack1, stack2));
	}

	return maxs;
}
