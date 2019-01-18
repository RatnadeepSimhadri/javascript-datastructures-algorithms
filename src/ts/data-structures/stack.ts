/**
 * In Javascript Object is key value pairs and Numbers Index number can give us the last element
 * *i.e., if number of elements == n then n-1th element of the Object gives the last element in the Stack
 * */
export default class Stack<T> {
  private count: number;
  private  items: any;
  constructor() {
    this.count = 0;
    this.items = {};
  }
  push(item: T) {
    this.items[this.count] = item;
    this.count++;
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    const item  = this.items[this.count - 1];
    delete(this.items[this.count - 1]);
    this.count --;
    return item;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }
  isEmpty(): boolean {
    return this.count === 0;
  }
  size(): number {
    return this.count;
  }

  clear() {
    /* while (!this.isEmpty()) {
      this.pop();
    } */

    this.items = {};
    this.count = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}
