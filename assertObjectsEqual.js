const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1); // Get the keys of object1
  const keys2 = Object.keys(object2); // Get the keys of object2

  if (keys1.length !== keys2.length) {
    return false; // If the number of keys is different, the objects are not equal
  }

  for (let key of keys1) { // Iterate over the keys of object1
    const value1 = object1[key]; // Get the value of the current key in object1
    const value2 = object2[key]; // Get the value of the corresponding key in object2

    if (Array.isArray(value1) && Array.isArray(value2)) { // If both values are arrays
      if (!eqArrays(value1, value2)) { // Compare the arrays using the eqArrays function
        return false; // If the arrays are not equal, the objects are not equal
      }
    } else if (typeof value1 === 'object' && typeof value2 === 'object') { // If both values are objects
      if (!eqObjects(value1, value2)) { // Recursively compare the objects using the eqObjects function
        return false; // If the nested objects are not equal, the objects are not equal
      }
    } else if (value1 !== value2) { // If the values are not arrays or objects, compare them directly
      return false; // If the values are different, the objects are not equal
    }
  }

  return true; // If all keys and values are equal, the objects are equal
};


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

