/**
 * JavaScript Fundamentals - Function expressions
 * https://javascript.info/function-expressions
 *
 * Task: Rewrite with arrow functions
 */

const ask = (question, yes, no) => (confirm(question) ? yes() : no());

ask(
  'Do you agree?',
  () => alert('You agreed.'),
  () => alert('You canceled the execution.')
);
