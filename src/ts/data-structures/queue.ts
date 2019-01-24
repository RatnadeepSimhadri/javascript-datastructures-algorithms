/**
 * Using an Object to implement Stack is like using a Map to implement Stack in other languages
 * and I can get a O(1) Time Complexity on Add and Removing or rather Constant Time
 */
export default class Queue<T> {
  private items: {[index: number]: T};
  private frontOfQueue: number;
  private rearOfQueue: number;
  constructor() {
    this.rearOfQueue = -1;
    this.frontOfQueue = 0; /* Always Increments and keeps track of next element to be picked out of the Queue*/
    this.items = {};
  }
  enqueue(element: T) {
    this.rearOfQueue++;
    this.items[this.rearOfQueue] = element;
  }
  dequeue(): T {
    if (this.isEmpty()) {
      return undefined;
    }
    const res = this.items[this.frontOfQueue];
    delete(this.items[this.frontOfQueue]);
    this.frontOfQueue++;
    return res;
  }
  peek(): T {
    return this.items[this.frontOfQueue];
  }

  isEmpty() {
    return this.rearOfQueue < this.frontOfQueue;
  }
  size() {
    if (this.isEmpty()) {
      return 0;
    }
    return (this.rearOfQueue - this.frontOfQueue) + 1;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.frontOfQueue]}`;
    for (let i = this.frontOfQueue + 1; i <= this.rearOfQueue; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
  clear() {
    this.items = {};
    this.frontOfQueue = 0;
    this.rearOfQueue = -1;
  }

}
