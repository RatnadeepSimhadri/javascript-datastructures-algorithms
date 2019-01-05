"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stack_1 = require("../data-structures/stack");
function decimalToBinary(decNumber) {
    const remStack = new stack_1.default();
    let rem;
    let binaryString = '';
    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }
    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}
exports.decimalToBinary = decimalToBinary;
function baseConverter(decNumber, base) {
    const remStack = new stack_1.default();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let rem;
    let baseString = '';
    if (!(base >= 2 && base <= 36)) {
        return '';
    }
    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }
    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }
    return baseString;
}
exports.baseConverter = baseConverter;
