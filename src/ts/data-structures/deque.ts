/**
 * Using an Object to implement Deque is like using a Map to implement Deque in other languages
 * and I can get a O(1) Time Complexity on Add and Removing or rather Constant Time
 * The Deque is implemented at O(1) coz the front pos can go -ve
 */
export default class Deque<T> {
  private items: {[index: number]: T};
  private frontOfQueue: number;
  private rearOfQueue: number;
  constructor() {
    this.rearOfQueue = -1;
    this.frontOfQueue = 0; /* May Increment or Decrement to discover the first position in DeQueue*/
    this.items = {};
  }
  addBack(element: T) {
    this.rearOfQueue++;
    this.items[this.rearOfQueue] = element;
  }
  addFront(element: T) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else {
      this.frontOfQueue --;
      this.items[this.frontOfQueue] = element;
    }
  }
  removeFront(): T {
    if (this.isEmpty()) {
      return undefined;
    }
    const res = this.items[this.frontOfQueue];
    delete(this.items[this.frontOfQueue]);
    this.frontOfQueue++;
    return res;
  }

  removeBack(): T {
    if (this.isEmpty()) {
      return undefined;
    }
    const res = this.items[this.rearOfQueue];
    delete(this.items[this.rearOfQueue]);
    this.rearOfQueue--;
    return res;
  }
  peekFront(): T {
    return this.items[this.frontOfQueue];
  }
  peekBack(): T {
    return this.items[this.rearOfQueue];
  }

  isEmpty() {
    return this.size() === 0;
  }
  size() {
    if (this.frontOfQueue < 0) {
      return (this.rearOfQueue + 1) + (-(this.frontOfQueue));
    } else {
      return (this.rearOfQueue - this.frontOfQueue) + 1;
    }
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
