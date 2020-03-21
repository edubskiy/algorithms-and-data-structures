const arr1 = [3, 5, 9, 11];
const arr2 = [2, 3, 10, 13];

function mergeSortedArrays(arr1, arr2) {
  let arrItem1 = arr1[0];
  let arrItem2 = arr2[0];
  let mergedArray = [];
  let i = 1;
  let j = 1;

  if (!arr1.length) {
    return arr2;
  }

  if (!arr2.length) {
    return arr1;
  }

  while (arrItem1, arrItem2) {
    if (arrItem1 < arrItem2) {
      mergedArray.push(arrItem1);
      arrItem1 = arr1[i];
      i++;
    } else {
      mergedArray.push(arrItem2);
      arrItem2 = arr2[j];
      j++;
    }
  }

  return mergedArray;
}

// Check solution
let sortedArray = mergeSortedArrays(arr1, arr2);
// [2, 3, 3, 5, 9, 10, 11, 13]


// Solution #2
function mergeSortedArrays2(arr1, arr2) {
  return arr1.concat(arr2).sort(function (a, b) {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  });
}

let sortedArray = mergeSortedArrays2(arr1, arr2);
// [2, 3, 3, 5, 9, 10, 11, 13]


// Solution #3

function mergeSortedArrays3(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

let sortedArray = mergeSortedArrays3(arr1, arr2);
// [2, 3, 3, 5, 9, 10, 11, 13]
