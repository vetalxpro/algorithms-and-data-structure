// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams( stringA, stringB ) {
//   const stringACharMap = makeCharMap(stringA.replace(/\W/g, '').toLowerCase());
//   const stringBCharMap = makeCharMap(stringB.replace(/\W/g, '').toLowerCase());
//   if ( Object.keys(stringACharMap).length !== Object.keys(stringBCharMap).length ) {
//     return false;
//   }
//   return Object.keys(stringACharMap).every(( char ) => stringACharMap[ char ] === stringBCharMap[ char ]);
//
//   function makeCharMap( str ) {
//     const map = {};
//     for ( let char of str ) {
//       map[ char ] = map[ char ] + 1 || 1;
//     }
//     return map;
//   }
// }

function anagrams( stringA, stringB ) {
  return normalizeStr(stringA) === normalizeStr(stringB);

  function normalizeStr( str ) {
    return str
      .replace(/\W/g, '')
      .toLowerCase()
      .split('')
      .sort()
      .join('');
  }
}

module.exports = anagrams;
