// Pros
// delete O(1)
// update O(1)
// lookup O(1) !can be also O(n)
// search O(1)

// Cons
// lookup O(1) or O(n) depends if collision of multiple keys at the same address exist

// Information Maps and Sets

// Map let's you store hash with any key, even functions and arrays
// and add an order to hash tables

// Set only stores keys, not values

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];

    if (!currentBucket) return undefined;

    for (let i = 0; i < currentBucket.length; i++) {
      if (currentBucket[i][0] === key) {
        return currentBucket[i][1];
      }
    }
    return undefined;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = []
    }
    this.data[address].push([key, value])
  }

  keys() {
    const keys = [];

    if (!this.data.length) return;

    for (let i = 0; i < this.data.length; i++) {
      console.log("extracting key for data", this.data[i]);
      if (this.data[i]) {
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            keys.push(this.data[i][j][0])
          }
        } else {
          keys.push(this.data[i][0][0]);
        }
      }
    }

    return keys;
  }
}

// @deprecated

// class HashTableWithOrderedMemory {
//   constructor(size) {
//     this.data = new Array(size);
//     this.lastUsedIndex = 0;
//   }

//   _hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash = (hash + key.charCodeAt(i) * i) % this.data.length
//     }
//     return hash;
//   }

//   get(key) {
//     const hashedKey = this._hash(key);
//     let hashedKeyInMemory;

//     for (let i = 0; i < this.lastUsedIndex; i++) {
//       hashedKeyInMemory = this.data[i][0];

//       if (hashedKeyInMemory === hashedKey) {
//         return this.data[i][1];
//       }
//     }
//     return false;
//   }

//   set(key, value) {
//     const hashedKey = this._hash(key);

//     this.data[this.lastUsedIndex] = [hashedKey, value, key];
//     this.lastUsedIndex++;
//   }

//   keys() {
//     const keys = [];

//     if (!this.data.length) return;

//     for (let i = 0; i < this.lastUsedIndex; i++) {
//       keys.push(this.data[i][2]);
//     }

//     return keys;
//   }
// }

// Exampmle
const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);  // [ 23: ['grapes', 1000]]
myHashTable.set('cherry', 5); // [ 23: ['grapes', 1000], 9: ['cherry', 5]]
myHashTable.get('grapes'); // 10000
myHashTable.keys(); // ['grapes', 'cherry']
