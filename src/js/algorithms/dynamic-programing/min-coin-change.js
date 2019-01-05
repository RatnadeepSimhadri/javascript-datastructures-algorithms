"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function minCoinChange(coins, amount) {
    const cache = [];
    // tslint:disable-next-line:no-shadowed-variable
    const makeChange = function (amount) {
        if (!amount) {
            return [];
        }
        if (cache[amount]) {
            return cache[amount];
        }
        let min = [], newMin, newAmount;
        for (let i = 0; i < coins.length; i++) {
            const coin = coins[i];
            newAmount = amount - coin;
            if (newAmount >= 0) {
                newMin = makeChange(newAmount);
            }
            if (newAmount >= 0 &&
                (newMin.length < min.length - 1 || !min.length) &&
                (newMin.length || !newAmount)) {
                min = [coin].concat(newMin);
                // console.log('new Min ' + min + ' for ' + amount);
            }
        }
        return (cache[amount] = min);
    };
    return makeChange(amount);
}
exports.minCoinChange = minCoinChange;
