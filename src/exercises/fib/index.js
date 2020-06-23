// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// fib(2) -> fib(1) + fib(0)

// fib(5)

// if (n <= 2) {
//   return fibs.push(fibs[0] + fibs[1])
// }

// fibs.push(fibs[n - 1] + fibs[n - 2])

function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}
function slowFib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

// const fibs = [0, 1];
// function fib(n) {
//   if (n < 1) {
//     return fibs[fibs.length - 1];
//   }
//   if (n <= 1) {
//     fibs.push(fibs[0] + fibs[1]);
//   } else {
//     fibs.push(fibs[n - 2] + fibs[n - 1]);
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// Iterative solution improved
// function fib(n) {
//   const result = [0, 1]
//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1]
//     const b = result[i - 2]

//     result.push(a + b)
//   }

//   return result[n]
// }

// Iterative solution (initial)
// function fib(n) {
//   let newFib = 0;
//   let fibs = [];
//   for (i = 0; i < n; i++) {
//     if (!fibs.length) {
//       fibs.push(newFib); // 0
//       newFib += 1;
//       fibs.push(newFib); // 1
//     } else {
//       // i = 1
//       newFib = fibs[i] + fibs[i - 1];
//       fibs.push(newFib); // 1
//     }
//   }

//   return newFib;
// }

module.exports = fib;
