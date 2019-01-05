"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gcd = (num1, num2) => {
    if (num1 === 0 || num2 === 0) {
        return 0;
    }
    if (num1 === num2) {
        return num1;
    }
    if (num1 > num2) {
        return exports.gcd(num1 - num2, num2);
    }
    return exports.gcd(num1, num2 - num1);
};
exports.gcdArray = (num) => {
    let result = num[0];
    for (let i = 1; i < num.length; i++) {
        result = exports.gcd(num[i], result);
    }
    return result;
};
