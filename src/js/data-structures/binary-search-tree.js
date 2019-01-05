"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const node_1 = require("./models/node");
class BinarySearchTree {
    constructor(compareFn = util_1.defaultCompare) {
        this.compareFn = compareFn;
    }
    insert(key) {
        // special case: first key
        if (this.root == null) {
            this.root = new node_1.Node(key);
        }
        else {
            this.insertNode(this.root, key);
        }
    }
    insertNode(node, key) {
        if (this.compareFn(key, node.key) === util_1.Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new node_1.Node(key);
            }
            else {
                this.insertNode(node.left, key);
            }
        }
        else if (node.right == null) {
            node.right = new node_1.Node(key);
        }
        else {
            this.insertNode(node.right, key);
        }
    }
    getRoot() {
        return this.root;
    }
    search(key) {
        return this.searchNode(this.root, key);
    }
    searchNode(node, key) {
        if (node == null) {
            return false;
        }
        if (this.compareFn(key, node.key) === util_1.Compare.LESS_THAN) {
            return this.searchNode(node.left, key);
        }
        else if (this.compareFn(key, node.key) === util_1.Compare.BIGGER_THAN) {
            return this.searchNode(node.right, key);
        }
        // key is equal to node.item
        return true;
    }
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback);
    }
    inOrderTraverseNode(node, callback) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    }
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback);
    }
    preOrderTraverseNode(node, callback) {
        if (node != null) {
            callback(node.key);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback);
    }
    postOrderTraverseNode(node, callback) {
        if (node != null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }
    min() {
        return this.minNode(this.root);
    }
    minNode(node) {
        let current = node;
        while (current != null && current.left != null) {
            current = current.left;
        }
        return current;
    }
    max() {
        return this.maxNode(this.root);
    }
    maxNode(node) {
        let current = node;
        while (current != null && current.right != null) {
            current = current.right;
        }
        return current;
    }
    remove(key) {
        this.root = this.removeNode(this.root, key);
    }
    removeNode(node, key) {
        if (node == null) {
            return null;
        }
        if (this.compareFn(key, node.key) === util_1.Compare.LESS_THAN) {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        else if (this.compareFn(key, node.key) === util_1.Compare.BIGGER_THAN) {
            node.right = this.removeNode(node.right, key);
            return node;
        }
        else {
            // key is equal to node.item
            // handle 3 special conditions
            // 1 - a leaf node
            // 2 - a node with only 1 child
            // 3 - a node with 2 children
            // case 1
            if (node.left == null && node.right == null) {
                node = null;
                return node;
            }
            // case 2
            if (node.left == null) {
                node = node.right;
                return node;
            }
            else if (node.right == null) {
                node = node.left;
                return node;
            }
            // case 3
            const aux = this.minNode(node.right);
            node.key = aux.key;
            node.right = this.removeNode(node.right, aux.key);
            return node;
        }
    }
}
exports.default = BinarySearchTree;
