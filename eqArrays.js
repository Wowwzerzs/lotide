const assertEqual = require('./assertEqual');

const eqArrays = function(arr1, arr2) {
  // Check if the lengths of the arrays are different
  if (arr1.length !== arr2.length) {
    return false; // Return false if lengths are different
  }
  // Iterate over the indices of arr1
  for (let i = 0; i < arr1.length; i++) {
    // Compare elements at the same index of arr1 and arr2
    if (arr1[i] !== arr2[i]) {
      return false; // Return false if elements are different
    }
  }
  // Return true if all elements match
  return true;
};

module.exports = eqArrays;
