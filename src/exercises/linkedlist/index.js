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
}

module.exports = { Node, LinkedList };
