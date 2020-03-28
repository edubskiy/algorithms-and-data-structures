// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


function vowels(str) {
  pattern = /[aeiou]/gi;
  let matches = str.match(pattern);
  
  return matches && matches.length || 0;
}

module.exports = vowels;

// Iterative solution #1
// function vowels(str) {
//   const vowelsList = ['a', 'e', 'i', 'o', 'u'];
//   let vowelsCount = 0;

//   for (let char of str) {
//     if (vowelsList.indexOf(char.toLowerCase()) !== -1) {
//       vowelsCount++;
//     }
//   }

//   return vowelsCount;
// }
