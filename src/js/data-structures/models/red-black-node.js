"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = require("./node");
var Colors;
(function (Colors) {
    Colors[Colors["RED"] = 0] = "RED";
    Colors[Colors["BLACK"] = 1] = "BLACK";
})(Colors = exports.Colors || (exports.Colors = {}));
class RedBlackNode extends node_1.Node {
    constructor(key) {
        super(key);
        this.key = key;
        this.color = Colors.RED;
    }
    isRed() {
        return this.color === Colors.RED;
    }
}
exports.RedBlackNode = RedBlackNode;
