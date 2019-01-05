"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const linked_list_1 = require("./linked-list");
class SortedLinkedList extends linked_list_1.default {
    constructor(equalsFn = util_1.defaultEquals, compareFn = util_1.defaultCompare) {
        super(equalsFn);
        this.equalsFn = equalsFn;
        this.compareFn = compareFn;
    }
    push(element) {
        if (this.isEmpty()) {
            super.push(element);
        }
        else {
            const index = this.getIndexNextSortedElement(element);
            super.insert(element, index);
        }
    }
    insert(element, index = 0) {
        if (this.isEmpty()) {
            return super.insert(element, 0);
        }
        index = this.getIndexNextSortedElement(element);
        return super.insert(element, index);
    }
    getIndexNextSortedElement(element) {
        let current = this.head;
        let i = 0;
        for (; i < this.size() && current; i++) {
            const comp = this.compareFn(element, current.element);
            if (comp === util_1.Compare.LESS_THAN) {
                return i;
            }
            current = current.next;
        }
        return i;
    }
}
exports.default = SortedLinkedList;
