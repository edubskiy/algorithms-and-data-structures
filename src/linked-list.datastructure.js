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

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    newNode.next = this.head;
    this.head.prev = newNode;
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
      prev: null,
    };
    let leader = this.traverseTo(index - 1);
    let follower = leader.next;

    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
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
    let holdingPointer = nodeToRemove.next;

    leader.next = holdingPointer;
    holdingPointer.prev = leader;

    this.length--;

    return this;
  }

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

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
/**
LinkedList {
  head: { value: 1, next: { value: 10, next: [Object] } },
  data: {},
  tail: { value: 16, next: null },
  length: 4
}
 */
myLinkedList.insertAt(1, 99); // [ 1, 99, 10, 5, 16 ]
myLinkedList.removeAt(1); // [1, 10, 5, 16];
console.log(myLinkedList);

console.log(myLinkedList.getValues());
