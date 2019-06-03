/* R�mov� Dups! Write code to remove duplicates from an unsorted linked list.
FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed? Hints: #9, #40
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function removeDuplicates(node) {
    if (node == null || node.next == null) {
        return node;
    }

    var hash = new Map();
    hash.set(node.value);

    while (node.next != null) {
        if (!hash.has(node.next.value)) {
            hash.set(node.next.value);
            node = node.next;
        } else {
            console.log('removing node' + node.next.value);
            node.next = node.next.next;
        }
    }
    return node;
}

function removeDuplicatesNoExtraSpace(node) {
    if (node == null || node.next == null) {
        return node;
    }

   
    while (node != null) {
        var pointerNext = node;
        while(pointerNext.next != null){
            if (node.value == pointerNext.next.value){
                pointerNext.next = pointerNext.next.next;
            }else{
                pointerNext = pointerNext.next;
            }
        }
        node =node.next;
    }
    return node;
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


console.log(removeDuplicates(node1));

console.log(removeDuplicatesNoExtraSpace(node1));

