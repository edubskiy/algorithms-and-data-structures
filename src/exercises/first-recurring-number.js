// Google Question
// Given an array [2,5,1,2,3,5,1,2,4];
// It should return 2

// ------------------ SOLUTION 1 ------------------ //

// O(n^2)
// This method has one flaw that is if take as example [2,5,5,2,3,5,1,2,4];
// normally we want to return 5 as first reccoring character, but with this
// approach we will return 2, because we are comparing 0 character with rest
// at the beginning. SOLUTION 2 resolves this
function findFirstRecurringCharacter(arr) {
  let occuredCharacters = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
}

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
