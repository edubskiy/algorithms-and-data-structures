// Linked lists complexity
// prepend O(1)
// append O(1)
// lookup O(n)
// insert O(n)
// delete O(n)
// Pros over hashes -> ordered (have links to next elements)

// Example of linked list
// 10 --> 5 --> 16
// let linkedList = {
//   head: {
//     value: 10, // anything
//     next: {
//       // reference to new object
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  traverseTo(index) {
    if (index === 0) {
      return this.head;
    }

    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  insertAt(index, value) {
    if (index >= this.length) {
      this.append(value);
    }

    if (index === 0) {
      this.prepend(value);

      return this;
    }

    let newNode = {
      value: value,
      next: null,
    };
    let leader = this.traverseTo(index - 1);
    let holdingPoiner = leader.next;

    leader.next = newNode;
    newNode.next = holdingPoiner;
    this.length++;

    return this;
  }

  removeAt(index) {
    if (index === 0) {
      this.head = this.head.next;

      return this;
    }
    let leader = this.traverseTo(index - 1);
    let nodeToRemove = leader.next;
    let holdingPoiner = nodeToRemove.next;

    leader.next = holdingPoiner;
    this.length--;

    return this;
  }

  // Iterative solution
  // We iterate through the list once, changin the next pointer of each node
  // to the previous node. The order of operations is important: we copy node.next
  // into tmp before setting node.next to previous. Otherwise when we step forward
  // at the end of the list we'd actually step back to the previous node
  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let node = this.head,
      previous,
      tmp;

    this.tail = this.head;

    while (node) {
      // save next before we overwrite node.next
      tmp = node.next;

      // reverse pointer
      node.next = previous;

      // step forward in the linked list
      previous = node;
      node = tmp;
    }

    this.head.next = null;
    this.head = previous;

    return this;
  }

  // @deprecated O(n^2) reverse values
  // reverseValues() {
  // if (this.length === 1) {
  // return this.head;
  // }

  // let i = 0;
  // let nodeList = this.getValues().reverse();
  // let currentNode = this.head;

  // while (currentNode) {
  // currentNode.value = nodeList[i];
  // currentNode = currentNode.next;
  // i++;
  // }
  // }

  getValues() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(16);
myLinkedList.append(88);
myLinkedList.prepend(1);
// console.log(myLinkedList);
/**
LinkedList {
  head: { value: 1, next: { value: 10, next: [Object] } },
  data: {},
  tail: { value: 16, next: null },
  length: 4
}
 */
// myLinkedList.insertAt(1, 99);
// myLinkedList.removeAt(0);
console.log(myLinkedList.getValues());
myLinkedList.reverse();
// Debug output
// {value: 10, next: {…}}
// undefined
// {value: 1, next: undefined}
// {value: 10, next: {…}}
// {value: 16, next: {…}}value: 16next: {value: 10, next: {…}}__proto__: Object
// {value: 1, next: undefined}
// {value: 10, next: {…}}
// {value: 16, next: {…}}
// {value: 88, next: null}value: 88next: {value: 16, next: {…}}__proto__: Object
// {value: 10, next: {…}}
// {value: 16, next: {…}}
// {value: 88, next: null}
// null
// {value: 16, next: {…}}
// {value: 88, next: {…}}value: 88next: {value: 16, next: {…}}__proto__: Object
// null

console.log(myLinkedList.getValues());
// (4) [88, 16, 10, 1]
console.log(myLinkedList);
