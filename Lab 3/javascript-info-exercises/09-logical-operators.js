/**
 * JavaScript Fundamentals - Logical operators
 * https://javascript.info/logical-operators
 *
 * Task: What's the result of OR?
 * Task: What is the result of AND?
 */

// OR returns first truthy or last value
alert(null || 2 || undefined); // 2
alert(1 || 2 || 3); // 1

// AND returns first falsy or last value
alert(1 && null && 2); // null
alert(1 && 2); // 2
