/**
 * Data Types - Strings
 * https://javascript.info/string
 *
 * Task: Uppercase the first character
 * https://javascript.info/task/ucfirst
 * Task: Check for spam
 */

function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

function checkSpam(str) {
  const lower = str.toLowerCase();
  return lower.includes('viagra') || lower.includes('xxx');
}
