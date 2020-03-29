class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    
    if ( ! this.root) {
      this.root = newNode;

      return this;
    }

    let node = this.root;

    while (node) {
      if (node.value > value) {
        if (node.left) {
          node = node.left;
        } else {
          node.left = newNode;
          break;
        }
      } else {
        if (node.right) {
          node = node.right;
        } else {
          node.right = newNode;
          break;
        }
      }
    }

    return this;
  }

  lookup(value) {
    let node = this.root;
    let result;

    while (node) {
      if (node.value > value) {
        if (node.left) {
          node = node.left;
        }
      } else if (node.value < value) {
        if (node.right) {
          node = node.right;
        } 
      } else if (node.value === value) {
        result = node;
        node = null;
      }
    }

    return result;
  }
}

//     9
//  4     20
//1  6  15  170

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log(tree.lookup(4));
