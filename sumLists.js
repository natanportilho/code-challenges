/* Sum Lists: You have two numbers represented by a linked list,where each node contains a single digit. 
The digits are stored in reverse order,such that the 1's digit is at the head of the list. 
Write a function that adds the two numbers and returns the sum as a linked list.
EXAMPLE
Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295. 
Output:2 -> 1 -> 9.That is,912. 

FOLLOW UP
Suppose the digits are stored in forward order. 
Repeat the above problem. Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).Thatis,617 + 295. Output:9 ->1 ->2.That is,912.


PS: I've solved this problem using both a numeric and an string based approach.

*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class NodeSum {
    constructor(node, carry) {
        this.node = node;
        this.carry = carry;
    }
}

function printLinkedList(head) {
    while (head != null) {
        console.log(head.value);
        head = head.next;
    }
}

function sumListsStringAproach(listA, listB) {
    var n1 = '';
    var n2 = '';

    while (listA != null) {
        n1 = listA.value + n1;
        listA = listA.next;
    }

    while (listB != null) {
        n2 = listB.value + n2;
        listB = listB.next;
    }
    console.log(+n1 + +n2);
}

function sumListsForwardStringAproach(listA, listB) {
    var n1 = '';
    var n2 = '';

    while (listA != null) {
        n1 = n1 + listA.value;
        listA = listA.next;
    }

    while (listB != null) {
        n2 = n2 + listB.value;
        listB = listB.next;
    }
    console.log(+n1 + +n2);
}

function sumLists(listA, listB) {
    var n1;
    var n2;
    var sum = new Node(0);
    var resturnSum = sum;
    var carry = 0;
    while (listA != null || listB != null) {
        if (listA != null) {
            n1 = listA.value;
            listA = listA.next;
        } else {
            n1 = 0;
        }
        if (listB != null) {
            n2 = listB.value;
            listB = listB.next;
        } else {
            n2 = 0;
        }
        var partialSum = n1 + n2 + carry;
        var rest = 0;

        if (partialSum == 10) {
            rest = 0;
            carry = 1;
        }
        else if (partialSum % 10 > 0 && partialSum > 10) {
            rest = partialSum % 10;
            carry = 1;
        } else {
            rest = partialSum;
            carry = 0;
        }
        sum.next = new Node(rest);
        sum = sum.next;
    }
    printLinkedList(resturnSum.next);
}

function sumListsForward(listA, listB) {
    var sum = new Node(0);
    var returnSum = sum;
    var stackA = [];
    var stackB = [];
    var resultStack = [];
    while (listA != null || listB != null) {
        if (listA != null) {
            stackA.push(listA.value);
            listA = listA.next;
        } else {
            stackA.push(0);
        }
        if (listB != null) {
            stackB.push(listB.value);
            listB = listB.next;
        } else {
            stackB.push(0);
        }
    }
    var n1 = n2 = carry = 0;
    while (stackA.length != 0 || stackB.length != 0) {
        if (stackA.length != 0) {
            n1 = stackA.pop();
        }

        if (stackB.length != 0) {
            n2 = stackB.pop();
        }

        var partialSum = n1 + n2 + carry;
        var rest = 0;
        if (partialSum == 10) {
            rest = 0;
            carry = 1;
        }
        else if (partialSum % 10 > 0 && partialSum > 10) {
            rest = partialSum % 10;
            carry = 1;
        } else {
            rest = partialSum;
            carry = 0;
        }
        resultStack.push(new Node(rest))
    }
    while (resultStack.length > 0) {
        sum.next = new Node(resultStack.pop().value);
        sum = sum.next;
    }
    printLinkedList(returnSum.next);
}

var node1 = new Node(7);
var node2 = new Node(1);
var node3 = new Node(6);

var node4 = new Node(5);
var node5 = new Node(9);
var node6 = new Node(2);

node1.next = node2;
node2.next = node3;
node3.next = null;
node4.next = node5;
node5.next = node6;
node6.next = null;

console.log('Result for sum with \'numeric\' approach');
sumLists(node1, node4);

var node1 = new Node(6);
var node2 = new Node(1);
var node3 = new Node(7);

var node4 = new Node(2);
var node5 = new Node(9);
var node6 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = null;
node4.next = node5;
node5.next = node6;
node6.next = null;

console.log('Result for sum forward with \'numeric\' approach');
sumListsForward(node1, node4);


var node1 = new Node(7);
var node2 = new Node(1);
var node3 = new Node(6);

var node4 = new Node(5);
var node5 = new Node(9);
var node6 = new Node(2);

node1.next = node2;
node2.next = node3;
node3.next = null;
node4.next = node5;
node5.next = node6;
node6.next = null;

console.log('Result for sum with \'string\' approach');
sumListsStringAproach(node1, node4);


// ------------- //


var node1 = new Node(1);
var node2 = new Node(1);
var node3 = new Node(1);

var node4 = new Node(2);
var node5 = new Node(2);
var node6 = new Node(2);
var node7 = new Node(2);

node1.next = node2;
node2.next = node3;
node3.next = null;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = null;

console.log('Result for sum with \'numeric\' approach');
sumLists(node1, node4);

var node1 = new Node(1);
var node2 = new Node(1);
var node3 = new Node(1);

var node4 = new Node(2);
var node5 = new Node(2);
var node6 = new Node(2);
var node7 = new Node(2);

node1.next = node2;
node2.next = node3;
node3.next = null;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = null;

console.log('Result for sum forward with \'numeric\' approach');
sumListsForward(node1, node4);


var node1 = new Node(1);
var node2 = new Node(1);
var node3 = new Node(1);

var node4 = new Node(2);
var node5 = new Node(2);
var node6 = new Node(2);
var node7 = new Node(2);

node1.next = node2;
node2.next = node3;
node3.next = null;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = null;

console.log('Result for sum with \'string\' approach');
sumListsStringAproach(node1, node4);