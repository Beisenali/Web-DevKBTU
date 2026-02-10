/**
 * JavaScript Fundamentals - Nullish coalescing operator '??'
 * https://javascript.info/nullish-coalescing-operator
 *
 * ?? returns the right side only when left is null or undefined
 */

const user = null;
const defaultName = 'Guest';
const name = user ?? defaultName; // 'Guest'

// Different from || (which treats 0, '', false as "empty")
const height = 0;
const defaultHeight = 100;
height ?? defaultHeight; // 0
height || defaultHeight; // 100
