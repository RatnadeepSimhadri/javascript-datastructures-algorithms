"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const value_pair_1 = require("./value-pair");
class ValuePairLazy extends value_pair_1.ValuePair {
    constructor(key, value, isDeleted = false) {
        super(key, value);
        this.key = key;
        this.value = value;
        this.isDeleted = isDeleted;
    }
}
exports.ValuePairLazy = ValuePairLazy;
