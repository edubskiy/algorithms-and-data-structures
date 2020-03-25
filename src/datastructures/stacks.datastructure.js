// Stacks
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class StackBuiltWithArray {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  push(value) {
    this.data.push(value);
    this.length++;

    return this;
  }

  pop() {
    const popNode = this.data.pop();
    this.length--;

    return this;
  }

  isEmpty() {
    return this.length === 0;
  }
}

// On top of LinkedLists
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.bottom) {
      this.bottom = newNode;
      this.top = this.bottom;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;

    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    if (this.bottom === this.top) {
      this.bottom = null;
    }

    const popNode = this.top;

    this.top = this.top.next;
    this.length--;

    return this;
  }

  isEmpty() {
    return this.length === 0;
  }
}

// Discord
// Udemy
// google
var stack = new StackBuiltWithArray();

stack.push('google');
stack.push('Udemy');
stack.push('Discord');
stack.pop(); // Discord
// stack.pop(); // Udemy
// stack.pop(); // Google
// not this.top = null and this.bottom = null

console.log(stack);

class Queue {
  constructor() {
    this.stack = new StackBuiltWithArray();
  }

  enqueueu(value) {
    this.stack.push(value);
  }

  dequeue() {
    const dequeueNode = this.stack.data[0];
    let i = 0;
    for (let e of this.stack.data) {
      this.stack.data[i] = this.stack.data[i + 1];
      i++;
    }

    this.stack.pop();
    this.stack.length--;

    return dequeueNode;
  }
}

let queue = new Queue();
queue.enqueueu('first');
queue.enqueueu('second');
queue.enqueueu('third');
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);
