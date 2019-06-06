/* Loop Detection: Given a circular linked list, implement an algorithm that returns the node at the
beginning of the loop.
DEFINITION
Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so as to make a loop in the linked list.
EXAMPLE
Input: A -> B -> C -> D -> E -> C[thesameCasearlier]
Output: C */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function loopDetection(head) {
    var nodes = {};
    while (head != null) {
        if (nodes[head.value] === head) {
            return head;
        }
        nodes[head.value] = head;
        head = head.next;
    }
}

function loopDetectionRunner(head) {
    var slow = head;
    var runner = head.next;

    while (slow != null) {
        if (slow === runner){
            return slow;
        }
        slow = slow.next;
        runner = runner.next.next;
    }
}

var node1 = new Node('A');
var node2 = new Node('B');
var node3 = new Node('C');
var node4 = new Node('D');
var node5 = new Node('E');

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node3;

console.log(loopDetection(node1));
console.log('------------------');
console.log(loopDetectionRunner(node1));
