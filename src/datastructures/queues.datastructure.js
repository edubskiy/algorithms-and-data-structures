class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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

    this.last.next = newNode;
    this.last = newNode;

    this.length++;

    return this;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }

    if (this.length === 1) {
      this.first = null;
      this.last = null;
      this.length = 0;

      return this.first;
    }

    if (this.first === this.last) {
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
myQueue.dequeue();
console.log(myQueue);

// Joy
// Matt
// Pavel
// Samir
