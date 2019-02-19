function LinkedList() {
    this.head = null;
    this.length = 0;
    this.min = null;
  }

  function Node(value, next) {
    this.value = value;
    this.next = next;
  }

var MinStack = function() {
    return new LinkedList();
};

LinkedList.prototype.push = function(x) {
    this.head = new Node(x, this.head);
    this.length++;

    if (this.min == null || this.min.value >= x){
        var oldMin = this.min;
        this.min = new Node(x, oldMin);
    }
};

LinkedList.prototype.pop = function() {
    this.length--;
    if (this.head != null && this.min != null && this.head.value === this.min.value){
        if (this.min.next != null){
            this.min = new Node(this.min.next.value, this.min.next.next);
        }else{
            this.min = null;
        }
    }
    this.head = this.head.next;
};

LinkedList.prototype.top = function() {
    return this.head === undefined ? null : this.head.value;  
};

LinkedList.prototype.getMin = function() {
    if (this.length == 1){
        return this.head.value;
    }
    if (this.min != null){
        return this.min.value;
    }
    return null;
};



var minStack = new MinStack();
minStack.push(395);
console.log(minStack.getMin());
console.log(minStack.top());
console.log(minStack.getMin());
minStack.push(276);
minStack.push(29);
console.log(minStack.getMin());
minStack.push(482);
console.log(minStack.getMin());
minStack.pop();
minStack.push(-108);
minStack.push(-251);
console.log(minStack.getMin());
minStack.push(-439);
console.log(minStack.top());
minStack.push(370);
minStack.pop();
minStack.pop();
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.getMin());
console.log(minStack.getMin());



