// Validate BST: Implement a function to check if a binary tree is a binary search tree.

// It's not enough to look only to left and right, we must be sure that going all the way to the left we'll never find a node that is higher than current node.

/*

Hints:
To be a binary search tree, it's not sufficient that the left. value <= current.value <  right.value for each node. 
Every node on the left must be less than the current node, which must be less than all the nodes on the right.

Think about the checkBST function as a recursive function that ensures each node is within an allowable (min, max) range. 
At first, this range is infinite. When we traverse to the left, the min is negative infinity and the max is root.value. 
Can you implement this recursive function and properly adjust these ranges as you traverse the tree? 
*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function isBST(root) {
    return checkBSTPropertyForNode(root, Number.MIN_VALUE, Number.MAX_VALUE);
}

function checkBSTPropertyForNode(node, min, max) {
    if (node != null) {
        if (node.value < min || node.value > max) {
            return false;
        }
        return checkBSTPropertyForNode(node.left, min, node.value) && checkBSTPropertyForNode(node.right, node.value, max);
    }
    return true;
}


var root = new Node(8);
var node1 = new Node(3);
var node2 = new Node(10);
root.left = node1;
root.right = node2;
var node3 = new Node(1);
var node4 = new Node(6);
node1.left = node3;
node1.right = node4;
var node5 = new Node(4);
var node6 = new Node(7);
node4.left = node5;
node4.right = node6;
var node7 = new Node(14);
var node8 = new Node(13);
node2.right = node7;
node7.left = node8;

console.log(isBST(root));
