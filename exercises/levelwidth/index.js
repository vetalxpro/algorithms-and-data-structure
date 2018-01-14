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

function levelWidth( root ) {
  let counters = [ 0 ];
  let processArr = [ root, null ];
  while ( processArr.length > 1 ) {
    const node = processArr.shift();
    if ( node === null ) {
      processArr.push(null);
      counters.push(0);
    } else {
      processArr.push(...node.children);
      counters[ counters.length - 1 ] += 1;
    }
  }
  return counters;
}

module.exports = levelWidth;
