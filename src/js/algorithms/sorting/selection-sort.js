"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
exports.selectionSort = (array, compareFn = util_1.defaultCompare) => {
    const { length } = array;
    let indexMin;
    for (let i = 0; i < length - 1; i++) {
        indexMin = i;
        // console.log('index ' + array[i]);
        for (let j = i; j < length; j++) {
            if (compareFn(array[indexMin], array[j]) === util_1.Compare.BIGGER_THAN) {
                // console.log('new index min ' + array[j]);
                indexMin = j;
            }
        }
        if (i !== indexMin) {
            // console.log('swap ' + array[i] + ' with ' + array[indexMin]);
            util_1.swap(array, i, indexMin);
        }
    }
    return array;
};
