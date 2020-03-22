// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;

//-------------------- SOLUTION 3 with reduce -----------------//

// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, '');
// }

//-------------------- SOLUTION 3 with for of -----------------//

// function reverse(str) {
//   let reversed = '';

//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }

//-------------------- SOLUTION 2 with for let i -----------------//

// function reverse(str) {
//   let arr = str.split('');
//   let reversedArray = [];

//   for (i = arr.length - 1; i >= 0; i--) {
//     reversedArray.push(arr[i]);
//   }

//   console.log(reversedArray.join(''));

//   return reversedArray.join('');
// }

//-------------------- SOLUTION 1 -----------------//

// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }
