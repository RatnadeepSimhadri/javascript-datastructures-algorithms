"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function lcs(wordX, wordY, m = wordX.length, n = wordY.length) {
    if (m === 0 || n === 0) {
        return 0;
    }
    if (wordX[m - 1] === wordY[n - 1]) {
        return 1 + lcs(wordX, wordY, m - 1, n - 1);
    }
    else {
        const a = lcs(wordX, wordY, m, n - 1);
        const b = lcs(wordX, wordY, m - 1, n);
        return a > b ? a : b;
    }
}
exports.lcs = lcs;
