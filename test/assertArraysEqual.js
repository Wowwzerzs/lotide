const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe('assertArraysEqual()', function() {
  it('should not throw an error for equal arrays', function() {
    assert.doesNotThrow(function() {
      const arr1 = [1, 2, 3];
      const arr2 = [1, 2, 3];
      assertArraysEqual(arr1, arr2);
    });
  });

  it('should throw an error for non-equal arrays', function() {
    assert.doesNotThrow(function() {
      const arr3 = [1, 2, 3];
      const arr4 = [3, 2, 1];
      assertArraysEqual(arr3, arr4);
    });
  });
});



/*

const assertArraysEqual = require('../assertArraysEqual');

// Calling assertArraysEqual
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
assertArraysEqual(arr1, arr2);  // Output: ✅ Assertion Passed: [1,2,3] === [1,2,3]

const arr3 = [1, 2, 3];
const arr4 = [3, 2, 1];
assertArraysEqual(arr3, arr4);  // Output: ❌ Assertion Failed: [1,2,3] !== [3,2,1]

*/
