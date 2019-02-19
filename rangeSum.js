/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function rangeSumBST(root, L, R) {
    if (root == null){
        return 0;
    }

    // var leftSum = rangeSumBST(root.left, L, R) + isWithinRange(root.val, L, R) ? root.val : 0;
    // var rightSum = rangeSumBST(root.right, L, R) + isWithinRange(root.val, L, R) ? root.val : 0;

    var leftSum = isWithinRange(root.left, L, R) ? root.val : 0;
    var rightSum = isWithinRange(root.right, L, R) ? root.val : 0;
    return leftSum + rightSum + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R);
};




var node1 = new TreeNode(10);
var node2 = new TreeNode(5);
var node3 = new TreeNode(15);
var node4 = new TreeNode(3);
var node5 = new TreeNode(7);
var node6 = new TreeNode(18);

node1.left = node2
node1.right = node3
node2.left = node4
node2.right = node5
node3.right = node6;

// console.log(rangeSumBST(node1, 7, 15));



function doRangeSum(root, L, R){
    return ((root.val >= L && root.val <= R) ? root.val : 0) + sum(root, L, R);
}

function sum(node, left, right){
    if (node == null)
        return 0;
    
    var leftSum = getNodeValue(node.left, left, right);
    var rightSum = getNodeValue(node.right, left, right);
    return leftSum + rightSum + sum(node.left, left, right) + sum(node.right, left, right);
}

function getNodeValue(node, left, right) {
    return node != null && isWithinRange(node, left, right) ? node.val : 0;
};

function isWithinRange(node, left, right){
    return node.val >= left && node.val <= right;
}

console.log(doRangeSum(node1, 7, 15));