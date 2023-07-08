const assertArraysEqual = require('../assertArraysEqual');

// Calling assertArraysEqual
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
assertArraysEqual(arr1, arr2);  // Output: ✅ Assertion Passed: [1,2,3] === [1,2,3]

const arr3 = [1, 2, 3];
const arr4 = [3, 2, 1];
assertArraysEqual(arr3, arr4);  // Output: ❌ Assertion Failed: [1,2,3] !== [3,2,1]