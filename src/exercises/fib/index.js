// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Iterative solution
function fib(n) {
  let newFib = 0;
  let fibs = [];
  for (i = 0; i < n; i++) {
    if (!fibs.length) {
      fibs.push(newFib); // 0
      newFib += 1;
      fibs.push(newFib); // 1
    } else {
      // i = 1
      newFib = fibs[i] + fibs[i - 1];
      fibs.push(newFib); // 1
    }
  }

  return newFib;
}

module.exports = fib;
