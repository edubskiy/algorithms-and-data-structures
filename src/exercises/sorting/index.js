// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  let tmp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tmp;
      }
    }
  }

  return arr;
}

function selectionSort(arr) {
  let indexOfMin;
  let tmp;

  for (let i = 0; i < arr.length; i++) {
    indexOfMin = i; // now prove me wrong
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (i !== indexOfMin) {
      tmp = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = tmp;
    }
  }

  console.log('result array');
  console.log(arr);

  return arr;
}

function mergeSort(arr) {}

function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
