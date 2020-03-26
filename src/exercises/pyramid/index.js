// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let columnCount = n * 2 - 1;
  let columnHalf = Math.floor(columnCount / 2);

  for (let row = 0; row < n; row++) {
    let stairMessage = '';
    let symbolsCount = row * 2 + 1; // 1..3..5
    let halfSymbolsCount = (symbolsCount - 1) / 2; // 0..1..2
    for (let column = 0; column < columnCount; column++) {
      if (column < columnHalf - halfSymbolsCount || column > columnHalf + halfSymbolsCount) {
        stairMessage += ' '
      } else {
        stairMessage += '#';
      }
    }
    console.log(stairMessage);
  }
}

pyramid(3);

module.exports = pyramid;
