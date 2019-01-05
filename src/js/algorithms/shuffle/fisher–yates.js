"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../util");
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        util_1.swap(array, i, randomIndex);
    }
    return array;
}
exports.shuffle = shuffle;
