// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Iterative solution #1
function vowels(str) {
  const vowelsList = ['a', 'e', 'i', 'o', 'u'];
  let vowelsCount = 0;

  for (let char of str) {
    if (vowelsList.indexOf(char.toLowerCase()) !== - 1) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

module.exports = vowels;
