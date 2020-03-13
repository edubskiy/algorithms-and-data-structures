// Here we are going to implement array

class ArrayDataStructure {
  constructor(initialData) {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;

    return this.data;
  }

  pop() {
    let popedItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;

    return popedItem;
  }

  deleteAtIndex(index) {
    const item = this.data[index];
    this.shiftItemsFromIndex(index);

    this.length--;

    return item;
  }

  shiftItemsFromIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      // let's check, if we have for example { 0: 'a', 1: 'b', 2: 'c', 3: 'd'}
      // deleteAtIndex(1) => { 0: 'a', 2: 'c', 3: 'd'}
      // and calling shiftItemsFromIndex(1) => 'b'

      this.data[i] = this.data[i + 1];
    }

    // last element is still left at the end so we need to remove it
    delete this.data[this.length - 1];
  };
}

let arr = new ArrayDataStructure();

arr.push('a'); // { 1: 'a' }
arr.push('b'); // { 1: 'a': 2: 'b' }
arr.push('c'); // { 1: 'a': 2: 'b', 3: 'c' }
arr.push('d'); // { 1: 'a': 2: 'b', 3: 'c', 4: 'd' }
