"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StackArray {
    constructor() {
        this.items = [];
    }
    push(elem) {
        this.items = this.items.concat(elem);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    clear() {
        this.items = [];
    }
    size() {
        return this.items.length;
    }
    /**
     * Not part of the Initial Description of the Stack
     */
    toString() {
        return this.items.join(',');
    }
    /**
     * Not part of the Initial Description of the Stack
     */
    toArray() {
        return this.items;
    }
}
exports.default = StackArray;
