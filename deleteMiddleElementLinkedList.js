/* Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle) 
of a singly linked list, given only access to that node. 

EXAMPLE
lnput:the node c from the linked list a->b->c->d->e->f
Result: nothing is returned, but the new linked list looks like a->b->d->e->f
*/
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function deleteMiddleElement(nodeToDelte){
    if (nodeToDelte == null){
        return;
    }
    nodeToDelte.value = nodeToDelte.next.value;
    nodeToDelte.next = nodeToDelte.next.next;
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


deleteMiddleElement(node1, 3);
