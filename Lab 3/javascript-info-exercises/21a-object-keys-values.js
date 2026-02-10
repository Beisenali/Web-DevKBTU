/**
 * Data Types - Object.keys, values, entries
 * https://javascript.info/keys-values-entries
 *
 * Task: Count properties
 */

function count(obj) {
  return Object.keys(obj).length;
}

const user = { name: 'John', age: 30 };
count(user); // 2
