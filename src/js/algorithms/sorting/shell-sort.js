"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
function shellSort(array, compareFn = util_1.defaultCompare) {
    let increment = array.length / 2;
    while (increment > 0) {
        for (let i = increment; i < array.length; i++) {
            let j = i;
            const temp = array[i];
            while (j >= increment && compareFn(array[j - increment], temp) === util_1.Compare.BIGGER_THAN) {
                array[j] = array[j - increment];
                j = j - increment;
            }
            array[j] = temp;
        }
        if (increment === 2) {
            increment = 1;
        }
        else {
            increment = Math.floor(increment * 5 / 11);
        }
    }
    return array;
}
exports.shellSort = shellSort;
