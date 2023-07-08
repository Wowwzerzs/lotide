const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// Test cases
assertArraysEqual(middle([1]), []); // Output: ✅ Assertion Passed: [] === []
assertArraysEqual(middle([1, 2]), []); // Output: ✅ Assertion Passed: [] === []
assertArraysEqual(middle([1, 2, 3]), [2]); // Output: ✅ Assertion Passed: [2] === [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Output: ✅ Assertion Passed: [3] === [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Output: ✅ Assertion Passed: [2,3] === [2,3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Output: ✅ Assertion Passed: [3,4] === [3,4]