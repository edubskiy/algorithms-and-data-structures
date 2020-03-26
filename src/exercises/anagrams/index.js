// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function toSortedCharSequence(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

function anagrams(stringA, stringB) {
  return toSortedCharSequence(stringA) === toSortedCharSequence(stringB);
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   stringA = convertToLowerCaseCharSequence(stringA);
//   stringB = convertToLowerCaseCharSequence(stringB);

//   if (stringA.length !== stringB.length) {
//     return false;
//   }

//   let hashA = buildHashOfStringChars(stringA);
//   let hashB = buildHashOfStringChars(stringB);

//   for (char of stringA) {
//     if (hashA[char] !== hashB[char]) {
//       return false;
//     }
//   }

//   return true;
// }

// function convertToLowerCaseCharSequence(str) {
//   return str
//     .toLowerCase()
//     .replace(/ /g, '')
//     .match(/(\w+)/g)
//     .join('');
// }

// function buildHashOfStringChars(str) {
//   let hash = {};

//   for (const char of str) {
//     if (!hash[char]) {
//       hash[char] = 0;
//     } else {
//       hash[char]++;
//     }
//   }

//   return hash;
// }

