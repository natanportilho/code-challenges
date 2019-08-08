/* Successor: Write an algorithm to find the "next" node (i.e., in-order successor) of a given node in a binary search tree. 
You may assume that each node has a link to its parent. 

Hint: Here's one step of the logic: The successor of a specific node is the leftmost node of the right subtree. 
What if there is no right subtree, though?

When there is no subtree we have to backtrack to the parent node (going to the top of the tree) until we go from left -> right,
to see if we are going from left -> right we just need to check that parent.left === child.parent
*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

function findNext(node) {
    if (node === null) {
        return null;
    }
    if (node.right != null) {
        return getLeftmostChild(node.right);
    } else {
        let parent = node.parent;
        while (parent.left != node) {
            node = parent;
            parent = parent.parent
        }
        return parent.value;
    }
}

function getLeftmostChild(node) {
    while (node.left != null) {
        node = node.left;
    }
    return node.value;
}

var root = new Node(8);
var node1 = new Node(3);
var node2 = new Node(10);
root.left = node1;
node1.parent = root;
root.right = node2;
node2.parent = root;
var node3 = new Node(1);
var node4 = new Node(6);
node1.left = node3;
node3.parent = node1;
node1.right = node4;
node4.parent = node1;
var node5 = new Node(4);
var node6 = new Node(7);
node4.left = node5;
node4.right = node6;
node5.parent = node4;
node6.parent = node4;
var node7 = new Node(14);
var node8 = new Node(13);
node7.left = node8;
node7.parent = node2;
node8.parent = node7;
node2.right = node7;

console.log(findNext(root))