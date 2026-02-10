/**
 * Data Types - Numbers
 * https://javascript.info/number
 *
 * Task: Sum numbers from the visitor
 * Task: A random number from min to max
 */

function sumVisitorNumbers() {
  const a = +prompt('First number?', 0);
  const b = +prompt('Second number?', 0);
  alert(a + b);
}

function randomMinMax(min, max) {
  return min + Math.random() * (max - min);
}

function randomInteger(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}
