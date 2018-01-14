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

// function pyramid( n ) {
//   const cols = n + n - 1;
//   const midIndex = Math.floor(cols / 2);
//   for ( let row = 0; row < n; row += 1 ) {
//     let level = '';
//
//     for ( let col = 0; col < cols; col += 1 ) {
//       if ( midIndex + row >= col && midIndex - row <= col ) {
//         level += '#';
//       }
//       else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }

function pyramid( n, row = 0, level = '' ) {
  if ( row === n ) {
    return;
  }
  const maxLength = n + n - 1;
  if ( level.length === maxLength ) {
    console.log(level);
    return pyramid(n, row + 1);
  }
  const midIndex = Math.floor(maxLength / 2);
  let add;
  if ( midIndex - row <= level.length && midIndex + row >= level.length ) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}

module.exports = pyramid;
