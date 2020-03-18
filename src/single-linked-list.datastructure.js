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

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    console.log('first ', first);
    this.tail = this.head;
    let second = first.next;
    console.log('second ', second);
    while (second) {
      // [99, 10, 5, 16];
      const temp = second.next; // third => 5
      second.next = first; // [99, 10, 99, 16];
      console.log('swapped first ', first, 'in second.next', second.next);
      first = second; // [10, 10, 99, 16]
      console.log('swapped second ', second, 'in first', first);
      second = temp; // [10, 5, 99, 16]
      console.log('swapped third ', temp, 'in second', second);
    }

    this.head.next = null;
    this.head = first;

    return this;
  }

  // reverse() {
  //   if (this.length === 1) {
  //     return this.head;
  //   }

  //   let i = 0;
  //   let nodeList = this.getValues().reverse();
  //   let currentNode = this.head;

  //   while (currentNode) {
  //     currentNode.value = nodeList[i];
  //     currentNode = currentNode.next;
  //     i++;
  //   }
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
myLinkedList.append(5);
myLinkedList.append(16);
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
myLinkedList.insertAt(1, 99); // [ 1, 99, 10, 5, 16 ]
myLinkedList.removeAt(0); // [99, 10, 5, 16];
console.log(myLinkedList.getValues());
myLinkedList.reverse();
console.log(myLinkedList.getValues());