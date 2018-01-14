// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort
function swap( arr, index1, index2 ) {
  const temp = arr[ index1 ];
  arr[ index1 ] = arr[ index2 ];
  arr[ index2 ] = temp;
}

function bubbleSort( arr ) {
  for ( let i = 0; i < arr.length; i += 1 ) {
    for ( let j = 0; j < (arr.length - i - 1); j += 1 ) {
      if ( arr[ j ] > arr[ j + 1 ] ) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

function selectionSort( arr ) {
  for ( let i = 0; i < arr.length; i += 1 ) {
    let indexOfMin = i;
    for ( let j = i + 1; j < arr.length; j += 1 ) {
      if ( arr[ j ] < arr[ indexOfMin ] ) {
        indexOfMin = j;
      }
    }
    if ( indexOfMin !== i ) {
      swap(arr, indexOfMin, i);
    }

  }
  return arr;
}

function mergeSort( arr ) {
  if ( arr.length <= 1 ) {
    return arr;
  }
  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);
  return merge(mergeSort(left), mergeSort(right));
}

function merge( left, right ) {
  const results = [];
  while ( left.length && right.length ) {
    if ( left[ 0 ] < right[ 0 ] ) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return [ ...results, ...left, ...right ];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
