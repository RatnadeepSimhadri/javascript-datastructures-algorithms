"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
function findMaxValue(array, compareFn = util_1.defaultCompare) {
    if (array && array.length > 0) {
        let max = array[0];
        for (let i = 1; i < array.length; i++) {
            if (compareFn(max, array[i]) === util_1.Compare.LESS_THAN) {
                max = array[i];
            }
        }
        return max;
    }
    return undefined;
}
exports.findMaxValue = findMaxValue;
function findMinValue(array, compareFn = util_1.defaultCompare) {
    if (array && array.length > 0) {
        let min = array[0];
        for (let i = 1; i < array.length; i++) {
            if (compareFn(min, array[i]) === util_1.Compare.BIGGER_THAN) {
                min = array[i];
            }
        }
        return min;
    }
    return undefined;
}
exports.findMinValue = findMinValue;
