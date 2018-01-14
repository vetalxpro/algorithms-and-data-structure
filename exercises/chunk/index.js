// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//
// function chunk( array, size ) {
//   const chunked = [];
//   let chunk = [];
//   array.forEach(( val, i ) => {
//     if ( chunk.length < size ) {
//       chunk.push(val);
//     }
//     if ( chunk.length >= size || i === array.length - 1 ) {
//       chunked.push(chunk);
//       chunk = [];
//     }
//   });
//   return chunked;
// }

// function chunk( array, size ) {
//   const chunked = [];
//   for ( let el of array ) {
//     const last = chunked[ chunked.length - 1 ];
//     if ( !last || last.length === size ) {
//       chunked.push([ el ]);
//     } else {
//       last.push(el);
//     }
//   }
//   return chunked;
// }

function chunk( array, size ) {
  const result = [];
  let i = 0;
  while ( i < array.length ) {
    result.push(array.slice(i, i + size));
    i += size;
  }
  return result;
}

module.exports = chunk;
