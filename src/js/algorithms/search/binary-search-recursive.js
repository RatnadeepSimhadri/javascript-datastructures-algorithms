"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
const quicksort_1 = require("../sorting/quicksort");
function binarySearchRecursive(array, value, low, high, compareFn = util_1.defaultCompare) {
    if (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const element = array[mid];
        if (compareFn(element, value) === util_1.Compare.LESS_THAN) {
            return binarySearchRecursive(array, value, mid + 1, high, compareFn);
        }
        else if (compareFn(element, value) === util_1.Compare.BIGGER_THAN) {
            return binarySearchRecursive(array, value, low, mid - 1, compareFn);
        }
        else {
            return mid;
        }
    }
    return util_1.DOES_NOT_EXIST;
}
function binarySearch(array, value, compareFn = util_1.defaultCompare) {
    const sortedArray = quicksort_1.quickSort(array);
    const low = 0;
    const high = sortedArray.length - 1;
    return binarySearchRecursive(array, value, low, high, compareFn);
}
exports.binarySearch = binarySearch;
