import { StackDS } from "./stack";

interface SNode {
	data: number;
	max: number;
}

const stack = new StackDS<SNode>();

stack.push({ data: 1, max: 2 });
stack.push({ data: 2, max: 3 });
stack.push({ data: 3, max: 4 });
stack.push({ data: 4, max: 5 });

console.log(stack);
console.log(stack.pop());
console.log(stack.peek()!.max);
