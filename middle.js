// Helper function to compare if two arrays are equal
const eqArrays = require('./eqArrays');

// Helper function to assert if two arrays are equal
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr) {
  const length = arr.length; // Get the length of the array

  if (length <= 2) {
    return []; // Return an empty array if length is less than or equal to 2
  }

  const middleIndex = Math.floor(length / 2); // Calculate the middle index

  if (length % 2 === 1) {
    return [arr[middleIndex]]; // Return an array with the middle element for odd-length arrays
  } else {
    return [arr[middleIndex - 1], arr[middleIndex]]; // Return an array with the two middle elements for even-length arrays
  }
};

module.exports = middle;
