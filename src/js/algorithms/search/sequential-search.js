"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
function sequentialSearch(array, value, equalsFn = util_1.defaultEquals) {
    for (let i = 0; i < array.length; i++) {
        if (equalsFn(value, array[i])) {
            return i;
        }
    }
    return util_1.DOES_NOT_EXIST;
}
exports.sequentialSearch = sequentialSearch;
