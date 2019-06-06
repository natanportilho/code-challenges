/* Stack Min: How would you design a stack which, in addition to push and pop, 
has a function min which returns the minimum element? Push, pop and min should all operate in 0(1) time. */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.minStack = [];
        this.length = 0;
        this.top = null;
    }
    
    push(value){
        var node = new Node(value);
        node.next = this.top;
        this.top = node;
        if (this.minStack[this.minStack.length-1] == null || value <= this.minStack[this.minStack.length-1].value){
            this.minStack.push(node);
        }
        this.length++;
    }

    peek(){
        return this.top.value;
    }

    pop(){
        var node = this.top;
        this.top = this.top.next;
        this.length--;
        if (node.value == this.minStack[this.minStack.length-1].value){
            this.minStack.pop();
        }
        return node;
    }

    min(){
        return this.minStack[this.minStack.length-1].value;
    }
}


var stack = new Stack();

stack.push(2);
console.log('min ' + stack.min());
console.log('peek ' + stack.peek());
stack.push(7);
console.log('min ' + stack.min());
console.log('peek ' + stack.peek());
stack.push(8);
console.log('min ' + stack.min());
console.log('peek ' + stack.peek());
stack.push(9);
console.log('min ' + stack.min());
console.log('peek ' + stack.peek());
stack.push(-1);
console.log('min ' + stack.min());
console.log('peek ' + stack.peek());
stack.push(-2);
console.log('min ' + stack.min());
console.log('peek ' + stack.peek());
console.log('pop ' + stack.pop());
console.log('min ' + stack.min());
console.log('peek ' + stack.peek());
console.log('pop ' + stack.pop());
console.log('min ' + stack.min());
console.log('peek ' + stack.peek());
console.log('pop ' + stack.pop());
console.log('min ' + stack.min());
console.log('peek ' + stack.peek());
console.log('pop ' + stack.pop());
console.log('min ' + stack.min());
console.log('peek ' + stack.peek());
console.log('pop ' + stack.pop());
console.log('min ' + stack.min());
console.log('peek ' + stack.peek());