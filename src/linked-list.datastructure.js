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
}

const myLinkedList = new LinkedList(10);
console.log(myLinkedList);
