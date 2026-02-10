/**
 * Data Types - Arrays
 * https://javascript.info/array
 *
 * Task: Create an array
 * Task: Create an array styles
 * Task: Array operations
 */

const styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
styles[Math.floor(styles.length / 2)] = 'Classics';
const first = styles.shift();
styles.unshift('Rap', 'Reggae');
