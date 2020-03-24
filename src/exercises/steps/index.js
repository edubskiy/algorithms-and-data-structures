// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function buildStepMessageFor(level, charCountInLine) {
  let step = '';
  for (let i = 1; i <= charCountInLine; i++) {
    if (i <= level) {
      step = step + '#';
    } else {
      step = step + ' ';
    }
  }
  
  return step;
}

function steps(n) {
  stepMessage = '';
  for (let i = 1; i <= n; i++) {
    console.log(buildStepMessageFor(i, n));
  }
}

module.exports = steps;
