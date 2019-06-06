/* Stack Min: How would you design a stack which, in addition to push and pop, 
has a function min which returns the minimum element? Push, pop and min should all operate in 0(1) time. 
FOLLOW UP
Implement a function popAt(int index) which performs a pop operation on a specific sub-stack.
*/
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SetOfStacks {
    constructor(){
        this.threshHold = 10;
        this.stacks = [];
    }

    push(value){
        if (this.stacks.length == 0 || this.stacks[this.stacks.length - 1].length == this.threshHold){
            var stack = new Stack();
            stack.push(new Node(value));
            this.stacks.push(stack);
        }else{
            var stack = this.stacks[this.stacks.length - 1];
            stack.push(new Node(value));
        }
    }

    peek(){
        if (this.stacks.length > 0){
            return this.stacks[this.stacks.length - 1].peek().value;
        }
    }

    pop(){
        var stack = this.stacks[this.stacks.length - 1];
        stack.pop();
        if (stack.length == 0){
            this.stacks.pop();
        }
    }

    popAt(index){
        if (index <= this.stacks.length - 1){
            var stack = this.stacks[index];
            stack.pop();
        }
    }
}

class Stack {
    constructor(){
        this.length = 0;
        this.top = null;
    }
    
    push(value){
        var node = new Node(value);
        node.next = this.top;
        this.top = node;
        this.length++;
    }

    peek(){
        return this.top.value;
    }

    pop(){
        var node = this.top;
        this.top = this.top.next;
        this.length--;
        return node;
    }
}

var setOfStacks = new SetOfStacks();
setOfStacks.push(1);
setOfStacks.push(1);
setOfStacks.push(18);
setOfStacks.push(-2);
setOfStacks.push(4);
setOfStacks.push(0);
setOfStacks.push(14);
setOfStacks.push(13);
setOfStacks.push(99);
setOfStacks.push(3);
setOfStacks.push(7);
setOfStacks.push(1);
setOfStacks.push(1);
setOfStacks.push(3);
setOfStacks.push(5);
console.log(setOfStacks.peek());
setOfStacks.pop();
console.log(setOfStacks.peek());
console.log('number of stacks: ' + setOfStacks.stacks.length);
console.log('stack 1 length: ' + setOfStacks.stacks[0].length);
console.log('stack 2 length: ' + setOfStacks.stacks[1].length);
setOfStacks.popAt(0);
console.log('number of stacks: ' + setOfStacks.stacks.length);
console.log('stack 1 length: ' + setOfStacks.stacks[0].length);
console.log('stack 2 length: ' + setOfStacks.stacks[1].length);
setOfStacks.pop();
setOfStacks.popAt(1);
console.log('number of stacks: ' + setOfStacks.stacks.length);
console.log('stack 1 length: ' + setOfStacks.stacks[0].length);
console.log('stack 2 length: ' + setOfStacks.stacks[1].length);
setOfStacks.popAt(0);
setOfStacks.popAt(0);
setOfStacks.popAt(0);
setOfStacks.popAt(0);
setOfStacks.popAt(0);
setOfStacks.popAt(0);
setOfStacks.popAt(0);
setOfStacks.popAt(0);
setOfStacks.popAt(0);
console.log('number of stacks: ' + setOfStacks.stacks.length);
console.log('stack 1 length: ' + setOfStacks.stacks[0].length);
console.log('stack 2 length: ' + setOfStacks.stacks[1].length);
console.log('peek: ' + setOfStacks.peek());
setOfStacks.pop();
console.log('peek: ' + setOfStacks.peek());
setOfStacks.pop();
// setOfStacks.pop();
console.log('number of stacks: ' + setOfStacks.stacks.length);
console.log('stack 1 length: ' + setOfStacks.stacks[0].length);
setOfStacks.push(1);
console.log('stack 1 length: ' + setOfStacks.stacks[0].length);