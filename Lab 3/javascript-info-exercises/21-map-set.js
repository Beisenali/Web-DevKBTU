/**
 * Data Types - Map and Set
 * https://javascript.info/map-set
 *
 * Task: Filter unique array members
 * Task: Filter anagrams
 */

function unique(arr) {
  return [...new Set(arr)];
}

function aclean(arr) {
  const map = new Map();
  for (const word of arr) {
    const sorted = word.toLowerCase().split('').sort().join('');
    map.set(sorted, word);
  }
  return [...map.values()];
}
