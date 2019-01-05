"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deque_1 = require("../data-structures/deque");
function palindromeChecker(aString) {
    if (aString === undefined || aString === null ||
        (aString !== null && aString.length === 0)) {
        return false;
    }
    const deque = new deque_1.default();
    const lowerString = aString.toLocaleLowerCase().split(' ').join('');
    let firstChar, lastChar;
    for (let i = 0; i < lowerString.length; i++) {
        deque.addBack(lowerString.charAt(i));
    }
    while (deque.size() > 1) {
        firstChar = deque.removeFront();
        lastChar = deque.removeBack();
        if (firstChar !== lastChar) {
            return false;
        }
    }
    return true;
}
exports.palindromeChecker = palindromeChecker;
