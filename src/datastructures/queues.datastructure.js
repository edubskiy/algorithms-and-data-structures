class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Queues 

// pros:
// Fast operations
// Fast peek
// Ordered

// cons:
// Slow look up


class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    let newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      this.length++;

      return newNode;
    }

    // Update pointer of last node to point to a new node
    this.last.next = newNode;
    // Shift last node position so it will point to a new node
    this.last = newNode;

    this.length++;

    return this;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }

    if (this.length === 1) {
      this.last = null;
    }

    let dequeueNode = this.first;

    this.first = this.first.next;
    this.length--;

    return dequeueNode;
  }

  isEmpty() {
    return this.length === 0;
  }
}

let myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
// myQueue.dequeue();
console.log(myQueue);

// Joy
// Matt
// Pavel
// Samir
