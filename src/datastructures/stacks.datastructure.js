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
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    this.top.push(newNode);
    this.length++;

    return this;
  }

  pop() {
    const popNode = this.top.pop();
    this.length--;

    return this;
  }

  isEmpty() {
    return this.length === 0;
  }
}

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
