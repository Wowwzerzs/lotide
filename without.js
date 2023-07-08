// Helper function to compare if two arrays are equal
const eqArrays = require('./eqArrays');

// Helper function to assert if two arrays are equal
const assertArraysEqual = require('./assertArraysEqual');


const without = function (source, itemsToRemove) {
  const result = []; // Create an empty array to store the filtered items

  for (let item of source) { // Iterate over each item in the source array
    if (!itemsToRemove.includes(item)) { // Check if the item is not in the itemsToRemove array
      result.push(item); // Add the item to the result array if it should not be removed
    }
  }

  return result; // Return the resulting array without the removed items
};

// Test cases

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));

module.exports = without;