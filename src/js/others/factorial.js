"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function factorialIterative(number) {
    if (number < 0) {
        return undefined;
    }
    let total = 1;
    for (let n = number; n > 1; n--) {
        total *= n;
    }
    return total;
}
exports.factorialIterative = factorialIterative;
function factorial(n) {
    if (n < 0) {
        return undefined;
    }
    if (n === 1 || n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
exports.factorial = factorial;
