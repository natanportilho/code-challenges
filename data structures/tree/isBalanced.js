/* Check Balanced: Implement a function to check if a binary tree is balanced. 
For the purposes of this question, a balanced tree is defined to be a tree such that the heights of the 
two subtrees of any node never differ by more than one. */

class Node{
    constructor(){
        this.left = null;
        this.right = null;
    }
}

function isBalanced(root){
    var leftHeight = getHeight(root.left);
    if (leftHeight == false ){ // done to improve performance as we don't need to check all the nodes from the root: if a subtree is not balanced, than the tree is not balanced as well.
        return false;
    }
    var rightHeight = getHeight(root.right); // same reason here
    if (rightHeight == false ){
        return false;
    }


    if (leftHeight - rightHeight < 0 || leftHeight - rightHeight > 1){
        return false;
    }
    return true;
}
function getHeight(node) {
    if (node == null){
        return 0;
    }
    var leftHeight = getHeight(node.left);
    var rightHeight = getHeight(node.right);

    if (leftHeight - rightHeight < 0 || leftHeight - rightHeight > 1){
        return false;
    }
    
    return Math.max(leftHeight, rightHeight) + 1;
}

var node1 = new Node();
var node2 = new Node();
var node3 = new Node();
var node4 = new Node();

node1.left = node2;
node2.left = node3;
node1.right = node4;

console.log(isBalanced(node1));
