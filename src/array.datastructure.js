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
}
