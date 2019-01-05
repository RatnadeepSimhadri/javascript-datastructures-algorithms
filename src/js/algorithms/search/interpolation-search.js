"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
function interpolationSearch(array, value, compareFn = util_1.defaultCompare, equalsFn = util_1.defaultEquals, diffFn = util_1.defaultDiff) {
    const { length } = array;
    let low = 0;
    let high = length - 1;
    let position = -1;
    let delta = -1;
    while (low <= high &&
        util_1.biggerEquals(value, array[low], compareFn) &&
        util_1.lesserEquals(value, array[high], compareFn)) {
        delta = diffFn(value, array[low]) / diffFn(array[high], array[low]);
        position = low + Math.floor((high - low) * delta);
        if (equalsFn(array[position], value)) {
            return position;
        }
        if (compareFn(array[position], value) === util_1.Compare.LESS_THAN) {
            low = position + 1;
        }
        else {
            high = position - 1;
        }
    }
    return util_1.DOES_NOT_EXIST;
}
exports.interpolationSearch = interpolationSearch;
