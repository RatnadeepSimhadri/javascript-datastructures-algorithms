"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fibonacci(n) {
    if (n < 1) {
        return 0;
    } // {1}
    if (n <= 2) {
        return 1;
    } // {2}
    return fibonacci(n - 1) + fibonacci(n - 2); // {3}
}
exports.fibonacci = fibonacci;
function fibonacciIterative(n) {
    if (n < 1) {
        return 0;
    }
    let fibNMinus2 = 0;
    let fibNMinus1 = 1;
    let fibN = n;
    for (let i = 2; i <= n; i++) {
        // n >= 2
        fibN = fibNMinus1 + fibNMinus2; // f(n-1) + f(n-2)
        fibNMinus2 = fibNMinus1;
        fibNMinus1 = fibN;
    }
    return fibN;
}
exports.fibonacciIterative = fibonacciIterative;
function fibonacciMemoization(n) {
    if (n < 1) {
        return 0;
    }
    const memo = [0, 1];
    const fibonacciMem = (num) => {
        if (memo[num] != null) {
            return memo[num];
        }
        return (memo[num] = fibonacciMem(num - 1) + fibonacciMem(num - 2));
    };
    return fibonacciMem(n);
}
exports.fibonacciMemoization = fibonacciMemoization;
