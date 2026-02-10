/**
 * JavaScript Fundamentals - Type Conversions
 * https://javascript.info/type-conversions
 *
 * Task: Fix the addition
 * https://javascript.info/task/fix-prompt
 */

// prompt() returns string, so "1" + "2" = "12"
// Fix: convert to number with + or Number()
function fixAddition() {
  const a = +prompt('First number?', 1);
  const b = +prompt('Second number?', 2);
  alert(a + b);
}

// fixAddition(); // uncomment to run in browser
