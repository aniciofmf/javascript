export class StackDS<T> {
	private storage: T[] = [];

	push(item: T): void {
		this.storage.push(item);
	}

	pop(): T | undefined {
		return this.storage.pop();
	}

	peek(): T | undefined {
		return this.storage[this.size() - 1];
	}

	size(): number {
		return this.storage.length;
	}

	empty(): boolean {
		return this.storage.length === 0;
	}
}
