/* Palindrome: Implement a function to check if a linked list is a palindrome. */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Linked list : 1 -> 1 -> 1 -> 9 -> 1 -> 1 -> 1
// Array: 1,1,1,9,1,1,1

function isPalindrome(head){
    var arr = [];
    var node = head;
    while (head != null){
        arr.push(head.value);
        head = head.next;
    }

    for (var i = arr.length - 1; i >= 0; i--){
        if (arr[i] != node.value){
            return false;
        }else{
            node = node.next;
        }
    }
    return true;
}

var node1 = new Node(1);
var node2 = new Node(1);
var node3 = new Node(1);
var node4 = new Node(9);
var node5 = new Node(1);
var node6 = new Node(1);
var node7 = new Node(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = null;

console.log(isPalindrome(node1));