/* Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks. */

class MyQueue {
    constructor() {
        this.nodes = [[], []];
    }

    add(node) {
        this.nodes[0].push(node);
    }

    remove() {
        this.shiftStacks();
        this.nodes[1].pop();
    }

    getFirst() {
        this.shiftStacks();
        return this.nodes[1][this.nodes[1].length - 1];
    }

    shiftStacks() {
        if (this.nodes[1].length == 0) {
            while (this.nodes[0].length > 0) {
                var node = this.nodes[0].pop();
                this.nodes[1].push(node);
            }
        }
    }

}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

var queue = new MyQueue();
queue.add(new Node(1));
console.log('first: ' + queue.getFirst().data);
queue.remove();
queue.add(new Node(2));
console.log('first: ' + queue.getFirst().data);
queue.add(new Node(3));
queue.remove();
console.log('first: ' + queue.getFirst().data);
queue.add(new Node(4));
console.log('first: ' + queue.getFirst().data);
queue.add(new Node(5));
queue.remove();
console.log('first: ' + queue.getFirst().data);
