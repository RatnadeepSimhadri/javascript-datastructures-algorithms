"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const queue_1 = require("../../data-structures/queue");
var Colors;
(function (Colors) {
    Colors[Colors["WHITE"] = 0] = "WHITE";
    Colors[Colors["GREY"] = 1] = "GREY";
    Colors[Colors["BLACK"] = 2] = "BLACK";
})(Colors || (Colors = {}));
const initializeColor = (vertices) => {
    const color = {};
    for (let i = 0; i < vertices.length; i++) {
        color[vertices[i]] = Colors.WHITE;
    }
    return color;
};
exports.breadthFirstSearch = (graph, startVertex, callback) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);
    const queue = new queue_1.default();
    queue.enqueue(startVertex);
    while (!queue.isEmpty()) {
        const u = queue.dequeue();
        const neighbors = adjList.get(u);
        color[u] = Colors.GREY;
        for (let i = 0; i < neighbors.length; i++) {
            const w = neighbors[i];
            if (color[w] === Colors.WHITE) {
                color[w] = Colors.GREY;
                queue.enqueue(w);
            }
        }
        color[u] = Colors.BLACK;
        if (callback) {
            callback(u);
        }
    }
};
exports.bfs = (graph, startVertex) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);
    const queue = new queue_1.default();
    const distances = {};
    const predecessors = {};
    queue.enqueue(startVertex);
    for (let i = 0; i < vertices.length; i++) {
        distances[vertices[i]] = 0;
        predecessors[vertices[i]] = null;
    }
    while (!queue.isEmpty()) {
        const u = queue.dequeue(), neighbors = adjList.get(u);
        color[u] = Colors.GREY;
        for (let i = 0; i < neighbors.length; i++) {
            const w = neighbors[i];
            if (color[w] === Colors.WHITE) {
                color[w] = Colors.GREY;
                distances[w] = distances[u] + 1;
                predecessors[w] = u;
                queue.enqueue(w);
            }
        }
        color[u] = Colors.BLACK;
    }
    return {
        distances: distances,
        predecessors: predecessors
    };
};
