"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stack_1 = require("../data-structures/stack");
function parenthesesChecker(symbols) {
    const stack = new stack_1.default();
    const opens = '([{';
    const closers = ')]}';
    let balanced = true;
    let index = 0;
    let symbol;
    let top;
    while (index < symbols.length && balanced) {
        symbol = symbols[index];
        if (opens.indexOf(symbol) >= 0) {
            stack.push(symbol);
        }
        else {
            if (stack.isEmpty()) {
                balanced = false;
            }
            else {
                top = stack.pop();
                if (!(opens.indexOf(top) === closers.indexOf(symbol))) {
                    balanced = false;
                }
            }
        }
        index++;
    }
    return balanced && stack.isEmpty();
}
exports.parenthesesChecker = parenthesesChecker;
