// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;

    return node;
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      node = node.next;
      counter++;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;

    while (node.next) {
      node = node.next;
    }

    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (this.size() === 0) {
      return;
    }

    if (this.size() === 1) {
      this.head = null;
      return;
    }

    let node = this.head.next;
    let previous = this.head;

    while (node) {
      if (!node.next) {
        previous.next = null;
        return;
      }

      previous = node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
