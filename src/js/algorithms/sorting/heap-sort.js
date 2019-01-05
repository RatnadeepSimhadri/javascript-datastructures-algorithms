"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
function heapify(array, index, heapSize, compareFn) {
    let largest = index;
    const left = (2 * index) + 1;
    const right = (2 * index) + 2;
    if (left < heapSize && compareFn(array[left], array[index]) > 0) {
        largest = left;
    }
    if (right < heapSize && compareFn(array[right], array[largest]) > 0) {
        largest = right;
    }
    if (largest !== index) {
        util_1.swap(array, index, largest);
        heapify(array, largest, heapSize, compareFn);
    }
}
function buildMaxHeap(array, compareFn) {
    for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
        heapify(array, i, array.length, compareFn);
    }
    return array;
}
function heapSort(array, compareFn = util_1.defaultCompare) {
    let heapSize = array.length;
    buildMaxHeap(array, compareFn);
    while (heapSize > 1) {
        util_1.swap(array, 0, --heapSize);
        heapify(array, 0, heapSize, compareFn);
    }
    return array;
}
exports.default = heapSort;
