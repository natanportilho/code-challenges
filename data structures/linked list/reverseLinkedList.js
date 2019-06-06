

function reverseList(head) {
    if (head == null)
        return null;
    var stack = [];
    while (head != null) {
        stack.push(head);
        head = head.next;
    }

    var stackHead = stack[stack.length - 1];
    while (stack.length > 0) {
        head = stack.pop();
        head.next = stack[stack.length - 1];
    }
    return stackHead;
}

function reverseListRecursion(head) {
    if (head.next != null) {
        var node = reverseList(head.next);
        node.next = head;
        return node;
    } else {
        return head;
    }
}




function ListNode(val) {
    this.val = val;
    this.next = null;
}

var nodeA = new ListNode(1);
var nodeB = new ListNode(2);
var nodeC = new ListNode(3);
var nodeD = new ListNode(4);
var nodeE = new ListNode(5);

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;

console.log(reverseListRecursion(nodeA));
