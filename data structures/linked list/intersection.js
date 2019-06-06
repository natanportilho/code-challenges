/* Intersection: Given two (singly) linked lists, determine if the two lists intersect. 
Return the inter­ secting node. Note that the intersection is defined based on reference, not value.
That is, if the kth node of the first linked list is the exact same node (by reference) 
as the jth node of the second linked list, then they are intersecting. */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function getIntersection(listA, listB){

    var listCopy = {};
    while (listA != null){
        listCopy[listA.value] = listA;
        listA = listA.next;
    }

    while (listB != null){
        if (listCopy[listB.value] === listB){
            return listB;
        }
            listB = listB.next;    
    }
}

var node1 = new Node(3);
var node2 = new Node(1);
var node3 = new Node(5);
var node4 = new Node(9);
var node5 = new Node(7);
var node6 = new Node(2);
var node7 = new Node(1);

var node8 = new Node(4);
var node9 = new Node(6);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = null;

node8.next = node9;
node9.next = node5;

console.log(getIntersection(node1, node8));
