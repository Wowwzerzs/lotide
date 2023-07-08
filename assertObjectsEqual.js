const eqObjects = require('./eqObjects');

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect; // Importing the inspect function to display objects

  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(eqObjects(shirtObject, anotherShirtObject), true); // Output: ✅ Assertion Passed: true === true

const obj1 = { name: 'John', age: 25 };
const obj2 = { age: 25, name: 'John' };
assertObjectsEqual(obj1, obj2); // Output: ✅ Assertion Passed: { name: 'John', age: 25 } === { age: 25, name: 'John' }

module.exports = assertObjectsEqual;