"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const min_max_search_1 = require("../search/min-max-search");
const countingSortForRadix = (array, radixBase, significantDigit, minValue) => {
    let bucketsIndex;
    const buckets = [];
    const aux = [];
    for (let i = 0; i < radixBase; i++) {
        buckets[i] = 0;
    }
    for (let i = 0; i < array.length; i++) {
        bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase);
        buckets[bucketsIndex]++;
    }
    for (let i = 1; i < radixBase; i++) {
        buckets[i] += buckets[i - 1];
    }
    for (let i = array.length - 1; i >= 0; i--) {
        bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase);
        aux[--buckets[bucketsIndex]] = array[i];
    }
    // array = [];
    // array.push(...aux);
    for (let i = 0; i < array.length; i++) {
        array[i] = aux[i];
    }
    return array;
};
function radixSort(array, radixBase = 10) {
    if (array.length < 2) {
        return array;
    }
    const minValue = min_max_search_1.findMinValue(array);
    const maxValue = min_max_search_1.findMaxValue(array);
    // Perform counting sort for each significant digit, starting at 1
    let significantDigit = 1;
    while ((maxValue - minValue) / significantDigit >= 1) {
        // console.log('radix sort for digit ' + significantDigit);
        array = countingSortForRadix(array, radixBase, significantDigit, minValue);
        // console.log(array.join());
        significantDigit *= radixBase;
    }
    return array;
}
exports.radixSort = radixSort;
