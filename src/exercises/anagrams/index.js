// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function convertToLowerCaseCharSequence(str) {
  return str.toLowerCase().replace(/ /g, '').match(/(\w+)/g).join('');
}

function buildHashOfStringChars(str) {
  let hash = {};

  for (const char of str) {
    if ( ! hash[char]) {
      hash[char] = 0;
    } else {
      hash[char]++;
    }
  }

  return hash
}

function anagrams(stringA, stringB) {
    stringA = convertToLowerCaseCharSequence(stringA);
    stringB = convertToLowerCaseCharSequence(stringB);
    
    console.log(stringA);
    console.log(stringB);
    

    let hashA = buildHashOfStringChars(stringA);
    let hashB = buildHashOfStringChars(stringB);
    let compareFrom = stringA.length > stringB.length ? stringA : stringB;

    for (char of compareFrom) {
      if (hashA[char] !== hashB[char]) {
        return false;
      }
    }

    return true;
}

module.exports = anagrams;
