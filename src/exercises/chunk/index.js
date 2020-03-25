// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

module.exports = chunk;

// ---------- Solution 2 ----------- //

// function chunk(array, size) {
//   let chunked = [];
//   let i = 0;

//   for (element of array) {
//     let last = chunked[chunked.length - 1];

//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }

//   return chunked;
// }

// ---------- Solution 1 ----------- //

// function chunk(array, size) {
//   let chunkedArray = [];
//   let chunksCount = Math.ceil(array.length / size);

//   for (let i = 0; i < chunksCount; i++) {
//     let index = size * i;
//     chunkedArray.push(array.slice(index, index + size)); // i = 1 size = 2
//   }

//   return chunkedArray;
// }
