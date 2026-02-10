/**
 * Data Types - Methods of primitives
 * https://javascript.info/primitives-methods
 *
 * Primitives have no methods, but temporary object wrappers provide them.
 */

const str = 'hello';
str.toUpperCase(); // "HELLO" - temporary String object created
str.length; // 5

const num = 1.23456;
num.toFixed(2); // "1.23"
