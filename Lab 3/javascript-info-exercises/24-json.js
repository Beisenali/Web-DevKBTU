/**
 * Data Types - JSON methods, toJSON
 * https://javascript.info/json
 *
 * Task: Turn the object into JSON and back
 * Task: Exclude backreferences
 */

const user = {
  name: 'John Smith',
  age: 35,
};

const json = JSON.stringify(user);
const parsed = JSON.parse(json);
