/* List of Depths: Given a binary tree, design an algorithm which creates a linked list of all the nodes
at each depth (e.g., if you have a tree with depth D, you'll have D linked lists). */
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.visited = false;
        this.level = null;
    }
}

class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Tree {
    constructor() {
        this.head = null;
    }
}

function computeLevels(node) {
    if (node == null) {
        return;
    }

    var queue = [];
    var queue2 = [];
    node.level = 0;
    queue.push(node);
    queue2.push(node);

    while (queue.length > 0) {
        var node = queue.shift();
        node.visited = true;
        console.log(node.value + ' level: ' + node.level);

        if (node.left != null && node.left.visited == false) {
            node.left.level = node.level + 1;
            queue.push(node.left);
            queue2.push(node.left);
        }

        if (node.right != null && node.right.visited == false) {
            node.right.level = node.level + 1;
            queue.push(node.right);
            queue2.push(node.right);
        }
    }
    return queue2;
}

function listOfDepths(queue) {
    linkedLists = [];

    while (queue.length > 0) {
        var level = queue[0].level;
        linkedLists.push(createLinkedListForLevel(level, queue));
    }
    console.log('Number of linked lists: ' + linkedLists.length);
    console.log('-- Printing linked lists --');

    for (var i = 0; i < linkedLists.length; i++){
        var node = linkedLists[i].next;

        while(node != null){
            console.log('list: ' + i + '-- ' + node.value) + ' --';
            node = node.next;
        }
    }

}

function createLinkedListForLevel(level, queue) {
    var linkedListNode = new LinkedListNode(0);
    var headToReturn = linkedListNode;
    while (queue[0] != null && queue[0].level == level) {
        var node = queue.shift();
        linkedListNode.next = new LinkedListNode(node.value);
        linkedListNode = linkedListNode.next;
    }
    return headToReturn;
}

var node1 = new Node(6);
var node2 = new Node(3);
var node3 = new Node(9);
var node4 = new Node(2);
var node5 = new Node(5);
var node6 = new Node(8);
var node7 = new Node(10);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;



listOfDepths(computeLevels(node1));