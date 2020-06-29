// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data, node = null) {
    node = node || this;
    const newNode = new Node(data);

    if (data < node.data) {
      if (!node.left) {
        node.left = newNode;
        return;
      }
      node.insert(data, node.left);
    } else {
      if (!node.right) {
        node.right = newNode;
        return;
      }
      node.insert(data, node.right);
    }
  }
}

module.exports = Node;
