/* Partition: Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. 
If x is contained within the list the values of x only need to be after the elements less than x (see below). 
The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions. 

EXAMPLE
Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 1[partition=5] 
Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function printLinkedList(head) {
    while (head != null) {
        console.log(head.value);
        head = head.next;
    }
}

function partition(head, partition) {
    if (head == null) {
        return;
    }

    var lessThenPartition = new Array();
    var biggerOrEqualPartition = new Array();

    while (head != null) {
        if (head.value < partition) {
            lessThenPartition.push(head.value);
        } else {
            biggerOrEqualPartition.push(head.value);
        }
        head = head.next;
    }

    var node = new Node(lessThenPartition[0])
    var head = node;

    for (var i = 1; i < lessThenPartition.length; i++) {
        node.next = new Node(lessThenPartition[i]);
        node = node.next;
    }

    for (var i = 0; i < biggerOrEqualPartition.length; i++) {
        node.next = new Node(biggerOrEqualPartition[i]);
        node = node.next;
    }

    return head;
}

function partitionInPlace(head, partition){
    if (head == null){
        return;
    }
    var dummy = new Node(0);
    var partitionList = new Node(0);
    var partitionListHead = partitionList;
    dummy.next = head;

    while(dummy.next != null){
        if (dummy.next.value >= partition){
            var temp =  dummy.next;
            dummy.next = dummy.next.next;
            temp.next = null;
            partitionList.next = temp;
            partitionList = partitionList.next;
        }else{
            dummy = dummy.next;
        }
    }
    dummy.next = partitionListHead.next;
    printLinkedList(head);
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

printLinkedList(node1);
console.log('------------')
partitionInPlace(node1, 8);

