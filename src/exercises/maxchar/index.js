// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let hash = {};

  for (character of str) {
    if (!hash[character]) {
      hash[character] = 1;
    } else {
      hash[character]++;
    }
  }

  let maxChar = '';
  let maxCount = 0;

  Object.keys(hash).forEach(char => {
    if (hash[char] > maxCount) {
      maxCount += hash[char];
      maxChar = char;
    }
  });

  return maxChar;
}

module.exports = maxChar;
