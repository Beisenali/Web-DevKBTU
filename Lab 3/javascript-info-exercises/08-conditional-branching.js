/**
 * JavaScript Fundamentals - Conditional branching: if, '?'
 * https://javascript.info/ifelse
 *
 * Task: Show the sign
 */

function showSign(number) {
  if (number > 0) {
    return 1;
  }
  if (number < 0) {
    return -1;
  }
  return 0;
}

// Using ternary operator
function showSignTernary(number) {
  return number > 0 ? 1 : number < 0 ? -1 : 0;
}
