// Google Question
// Given an array [2,5,1,2,3,5,1,2,4];
// It should return 2

// ------------------ SOLUTION 1 ------------------ //

function findFirstRecurringCharacter(arr) {
  let occuredCharacters = [];
  for (let i = 0; i < arr.length; i++) {
    if (occuredCharacters.indexOf(arr[i]) !== -1) {
      return arr[i];
    }
    occuredCharacters.push(arr[i]);
  }
}

// Test
findFirstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]);

// ------------------ SOLUTION 2 ------------------ //

function findFirstRecurringCharacter2(arr) {
  let occuredCharacters = {};
  for (let i = 0; i < arr.length; i++) {
    if (occuredCharacters[arr[i]] !== undefined) {
      return arr[i];
    }
    occuredCharacters[arr[i]] = '';
  }
}

// Test
findFirstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]);
