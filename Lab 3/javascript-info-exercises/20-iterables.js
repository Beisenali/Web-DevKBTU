/**
 * Data Types - Iterables
 * https://javascript.info/iterable
 *
 * Task: Sum the properties
 */

function sumSalaries(salaries) {
  let sum = 0;
  for (const salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
}

// Alternative with reduce
function sumSalariesReduce(salaries) {
  return Object.values(salaries).reduce((a, b) => a + b, 0);
}
