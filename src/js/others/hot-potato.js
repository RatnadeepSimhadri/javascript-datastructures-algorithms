"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const queue_1 = require("../data-structures/queue");
function hotPotato(elementsList, num) {
    const queue = new queue_1.default();
    const elimitatedList = [];
    for (let i = 0; i < elementsList.length; i++) {
        queue.enqueue(elementsList[i]);
    }
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        elimitatedList.push(queue.dequeue());
    }
    return {
        elimitated: elimitatedList,
        winner: queue.dequeue()
    };
}
exports.hotPotato = hotPotato;
