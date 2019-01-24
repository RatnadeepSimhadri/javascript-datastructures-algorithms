/**
 * Using an Object to implement Stack is like using a Map to implement Stack in other languages
 * and I can get a O(1) Time Complexity on Add and Removing or rather Constant Time
 */
export default class Queue<T> {
  private items: {[index: number]: T};
  private frontpos: number;
  private currentIndex: number;
  constructor() {
    this.currentIndex = -1;
    this.frontpos = 0; /* Always Increments and keeps track of next element to be picked out */
    this.items = {};
  }
  enqueue(element: T) {
    this.currentIndex++;
    this.items[this.currentIndex] = element;
  }
  dequeue(): T {
    if (this.isEmpty()) {
      return undefined;
    }
    const res = this.items[this.frontpos];
    delete(this.items[this.frontpos]);
    this.frontpos++;
    return res;
  }
  peek(): T {
    return this.items[this.frontpos];
  }

  isEmpty() {
    return this.currentIndex < this.frontpos;
  }
  size() {
    if (this.isEmpty()) {
      return 0;
    }
    return (this.currentIndex - this.frontpos) + 1;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.frontpos]}`;
    for (let i = this.frontpos + 1; i <= this.currentIndex; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
  clear() {
    this.items = {};
    this.frontpos = 0;
    this.currentIndex = -1;
  }

}
