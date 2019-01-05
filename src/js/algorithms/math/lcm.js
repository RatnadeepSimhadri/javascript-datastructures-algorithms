"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gcd_1 = require("./gcd");
exports.lcm = (num1, num2) => {
    if (num1 === 0 || num2 === 0) {
        return 0;
    }
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    return (num1 * num2) / gcd_1.gcd(num1, num2);
};
exports.lcmArray = (num) => {
    let result = num[0];
    for (let i = 1; i < num.length; i++) {
        result = num[i] * result / gcd_1.gcd(num[i], result);
    }
    return result;
};
