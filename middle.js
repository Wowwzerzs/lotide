// Helper function to compare if two arrays are equal
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

// Helper function to assert if two arrays are equal
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`❌ Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

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

// Test cases
assertArraysEqual(middle([1]), []); // Output: ✅ Assertion Passed: [] === []
assertArraysEqual(middle([1, 2]), []); // Output: ✅ Assertion Passed: [] === []
assertArraysEqual(middle([1, 2, 3]), [2]); // Output: ✅ Assertion Passed: [2] === [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Output: ✅ Assertion Passed: [3] === [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Output: ✅ Assertion Passed: [2,3] === [2,3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Output: ✅ Assertion Passed: [3,4] === [3,4]
