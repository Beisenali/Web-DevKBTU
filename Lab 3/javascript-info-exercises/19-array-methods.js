/**
 * Data Types - Array methods
 * https://javascript.info/array-methods
 *
 * Task: Filter range
 * Task: Filter range "in place"
 * Task: Sort in decreasing order
 */

function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}

function filterRangeInPlace(arr, a, b) {
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
    }
  }
}

// Sort in decreasing order
const arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
