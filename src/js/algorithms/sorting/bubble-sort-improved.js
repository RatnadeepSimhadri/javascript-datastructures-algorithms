"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
function modifiedBubbleSort(array, compareFn = util_1.defaultCompare) {
    const { length } = array;
    for (let i = 0; i < length; i++) {
        // console.log('--- ');
        for (let j = 0; j < length - 1 - i; j++) {
            // console.log('compare ' + array[j] + ' with ' + array[j + 1]);
            if (compareFn(array[j], array[j + 1]) === util_1.Compare.BIGGER_THAN) {
                // console.log('swap ' + array[j] + ' with ' + array[j + 1]);
                util_1.swap(array, j, j + 1);
            }
        }
    }
    return array;
}
exports.modifiedBubbleSort = modifiedBubbleSort;
