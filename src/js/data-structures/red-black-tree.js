"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const binary_search_tree_1 = require("./binary-search-tree");
const red_black_node_1 = require("./models/red-black-node");
class RedBlackTree extends binary_search_tree_1.default {
    constructor(compareFn = util_1.defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
    }
    /**
     * Left left case: rotate right
     *
     *       b                           a
     *      / \                         / \
     *     a   e -> rotationLL(b) ->   c   b
     *    / \                             / \
     *   c   d                           d   e
     *
     * @param node Node<T>
     */
    rotationLL(node) {
        const tmp = node.left;
        node.left = tmp.right;
        if (tmp.right && tmp.right.key) {
            tmp.right.parent = node;
        }
        tmp.parent = node.parent;
        if (!node.parent) {
            this.root = tmp;
        }
        else {
            if (node === node.parent.left) {
                node.parent.left = tmp;
            }
            else {
                node.parent.right = tmp;
            }
        }
        tmp.right = node;
        node.parent = tmp;
    }
    /**
     * Right right case: rotate left
     *
     *     a                              b
     *    / \                            / \
     *   c   b   -> rotationRR(a) ->    a   e
     *      / \                        / \
     *     d   e                      c   d
     *
     * @param node Node<T>
     */
    rotationRR(node) {
        const tmp = node.right;
        node.right = tmp.left;
        if (tmp.left && tmp.left.key) {
            tmp.left.parent = node;
        }
        tmp.parent = node.parent;
        if (!node.parent) {
            this.root = tmp;
        }
        else {
            if (node === node.parent.left) {
                node.parent.left = tmp;
            }
            else {
                node.parent.right = tmp;
            }
        }
        tmp.left = node;
        node.parent = tmp;
    }
    insert(key) {
        // special case: first key
        if (this.root == null) {
            this.root = new red_black_node_1.RedBlackNode(key);
            this.root.color = red_black_node_1.Colors.BLACK;
        }
        else {
            const newNode = this.insertNode(this.root, key);
            this.fixTreeProperties(newNode);
        }
    }
    insertNode(node, key) {
        if (this.compareFn(key, node.key) === util_1.Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new red_black_node_1.RedBlackNode(key);
                node.left.parent = node;
                return node.left;
            }
            else {
                return this.insertNode(node.left, key);
            }
        }
        else if (node.right == null) {
            node.right = new red_black_node_1.RedBlackNode(key);
            node.right.parent = node;
            return node.right;
        }
        else {
            return this.insertNode(node.right, key);
        }
    }
    fixTreeProperties(node) {
        while (node && node.parent && node.parent.color === red_black_node_1.Colors.RED && node.color !== red_black_node_1.Colors.BLACK) {
            let parent = node.parent;
            const grandParent = parent.parent;
            // case A
            if (grandParent && grandParent.left === parent) {
                const uncle = grandParent.right;
                // case 1: uncle of node is also red - only recoloring
                if (uncle && uncle.isRed()) {
                    grandParent.color = red_black_node_1.Colors.RED;
                    parent.color = red_black_node_1.Colors.BLACK;
                    uncle.color = red_black_node_1.Colors.BLACK;
                    node = grandParent;
                }
                else {
                    // case 2: node is right child - left rotate
                    if (node === parent.right) {
                        this.rotationRR(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    // case 3: node is left child - right rotate
                    this.rotationLL(grandParent);
                    // swap color
                    parent.color = red_black_node_1.Colors.BLACK;
                    grandParent.color = red_black_node_1.Colors.RED;
                    node = parent;
                }
            }
            else { // case B: parent is right child of grand parent
                const uncle = grandParent.left;
                // case 1: uncle is read - only recoloring
                if (uncle && uncle.isRed()) {
                    grandParent.color = red_black_node_1.Colors.RED;
                    parent.color = red_black_node_1.Colors.BLACK;
                    uncle.color = red_black_node_1.Colors.BLACK;
                    node = grandParent;
                }
                else {
                    // case 2: node is left child - left rotate
                    if (node === parent.left) {
                        this.rotationLL(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    // case 3: node is right child - left rotate
                    this.rotationRR(grandParent);
                    // swap color
                    parent.color = red_black_node_1.Colors.BLACK;
                    grandParent.color = red_black_node_1.Colors.RED;
                    node = parent;
                }
            }
        }
        this.root.color = red_black_node_1.Colors.BLACK;
    }
    getRoot() {
        return this.root;
    }
}
exports.default = RedBlackTree;
