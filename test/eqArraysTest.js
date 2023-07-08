const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('eqArrays()', function() {
  it('should return true for equal arrays', function() {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it('should return false for non-equal arrays', function() {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });
});
