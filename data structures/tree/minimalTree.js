/* Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an algo­
rithm to create a binary search tree with minimal height. */
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.head = null;
    }
}

function arrayToTree(arr, tree) {
    return recursiveArrayToTree(arr, 0, arr.length - 1, tree);
}

function recursiveArrayToTree(arr, start, end, tree) {
    if (start > end) {
        return;
    }
    var middle = Math.round((start + end) / 2);
    var node = new Node(arr[middle]);
    if (tree.head == null) {
        tree.head = node;
    }
    node.left = recursiveArrayToTree(arr, start, middle - 1, tree);
    node.right = recursiveArrayToTree(arr, middle + 1, end, tree);
    return node;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var tree = new Tree();
arrayToTree(arr, tree);
console.log(tree.head);

