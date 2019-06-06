/* Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list. */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function findKthLastElement(head, n){
    var arr = new Array();
    var i = 0;
    while(head != null){
        arr[i] = head;
        head = head.next;
        i++;
    }

    var linkedListLength = arr.length - 1;
    return arr[linkedListLength - n];
}

var node1 = new Node(2);
var node2 = new Node(3);
var node3 = new Node(8);
var node4 = new Node(1);
var node5 = new Node(7);
var node6 = new Node(8);
var node7 = new Node(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

console.log(findKthLastElement(node1, 3));
console.log(findKthLastElement(node1, 6));
console.log(findKthLastElement(node1, 1));
console.log(findKthLastElement(node1, 0));