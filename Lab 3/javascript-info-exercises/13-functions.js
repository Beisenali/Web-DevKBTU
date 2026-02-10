/**
 * JavaScript Fundamentals - Functions
 * https://javascript.info/function-basics
 *
 * Task: Function min(a, b)
 * Task: Function pow(x,n)
 */

function min(a, b) {
  return a < b ? a : b;
}

function pow(x, n) {
  if (n < 1 || !Number.isInteger(n)) {
    return 'n must be a positive integer';
  }
  return x ** n;
}
