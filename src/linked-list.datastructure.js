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

    this.data = {};
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
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList);
/**
LinkedList {
  head: { value: 1, next: { value: 10, next: [Object] } },
  data: {},
  tail: { value: 16, next: null },
  length: 4
}
 */
