"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
class PriorityQueue {
    constructor(compareFn = util_1.defaultCompare, compare = util_1.Compare.LESS_THAN) {
        this.compareFn = compareFn;
        this.compare = compare;
        this.items = [];
    }
    enqueue(element) {
        let added = false;
        for (let i = 0; i < this.items.length; i++) {
            if (this.compareFn(element, this.items[i]) === this.compare) {
                this.items.splice(i, 0, element);
                added = true;
                break;
            }
        }
        if (!added) {
            this.items.push(element);
        }
    }
    dequeue() {
        return this.items.shift();
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[0];
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
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        return this.items;
    }
}
exports.default = PriorityQueue;
