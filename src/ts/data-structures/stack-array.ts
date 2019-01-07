export default class StackArray <T> {
  private items: Array<T>;
  constructor() {
    this.items = [];
  }
  push(elem: T | T[] ) {
    this.items =  this.items.concat(elem);
  }

  pop(): T {
    return this.items.pop();
  }

  peek(): T {
    return this.items[this.items.length - 1];
}

 isEmpty(): boolean {
    return this.items.length === 0;
 }
 clear(): void {
    this.items = [];
 }
 size(): number {
    return this.items.length;
 }

/**
 * Not part of the Initial Description of the Stack
 */
 toString(): string {
    return this.items.join(',');
}

/**
 * Not part of the Initial Description of the Stack
 */
toArray(): T[] {
    return this.items;
}
}
