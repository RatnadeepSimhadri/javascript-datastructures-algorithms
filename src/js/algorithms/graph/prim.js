"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const INF = Number.MAX_SAFE_INTEGER;
const minKey = (graph, key, visited) => {
    // Initialize min value
    let min = INF;
    let minIndex = 0;
    for (let v = 0; v < graph.length; v++) {
        if (visited[v] === false && key[v] < min) {
            min = key[v];
            minIndex = v;
        }
    }
    return minIndex;
};
exports.prim = (graph) => {
    const parent = [];
    const key = [];
    const visited = [];
    const length = graph.length;
    for (let i = 0; i < length; i++) {
        key[i] = INF;
        visited[i] = false;
    }
    key[0] = 0;
    parent[0] = -1;
    for (let i = 0; i < length - 1; i++) {
        const u = minKey(graph, key, visited);
        visited[u] = true;
        for (let v = 0; v < length; v++) {
            if (graph[u][v] && visited[v] === false && graph[u][v] < key[v]) {
                parent[v] = u;
                key[v] = graph[u][v];
            }
        }
    }
    return parent;
};
