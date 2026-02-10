/**
 * Data Types - Destructuring assignment
 * https://javascript.info/destructuring-assignment
 *
 * Task: Destructuring assignment
 * Task: Maximal salary
 */

// Array destructuring
const [firstName, , title] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];

// Object destructuring
const options = { width: 100, height: 200 };
const { width, height } = options;

// Maximal salary
function topSalary(salaries) {
  let maxSalary = 0;
  let maxName = null;
  for (const [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      maxName = name;
    }
  }
  return maxName;
}
