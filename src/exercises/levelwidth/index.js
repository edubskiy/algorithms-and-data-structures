// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let counters = [0];
  let queue = [root, 's'];

  while (queue.length > 1) {
    let next = queue.shift();

    if (next === 's') {
      queue.push('s');
      counters.push(0);
    } else {
      counters[counters.length - 1]++;

      if (next.children && next.children.length) {
        queue.push(...next.children);
      }
    }
  }

  return counters;
}

module.exports = levelWidth;
