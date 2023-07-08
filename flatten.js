const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const flatten = function (arr) {
  const flattened = []; // Create an empty array to store the flattened elements

  for (let element of arr) { // Iterate over each element in the input array
    if (Array.isArray(element)) { // Check if the element is an array
      for (let nestedElement of element) { // Iterate over each element in the nested array
        flattened.push(nestedElement); // Push the nested element to the flattened array
      }
    } else {
      flattened.push(element); // Push non-array elements directly to the flattened array
    }
  }

  return flattened; // Return the flattened array
};

// Test case
const result = flatten([1, 2, [3, 4], 5, [6]]);
console.log(result); // Output: [1, 2, 3, 4, 5, 6]
assertArraysEqual(result, [1, 2, 3, 4, 5, 6]);

module.exports = flatten;