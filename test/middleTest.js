const assert = require('chai').assert;
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

describe('middle()', function() {
  it('should return an empty array for an input array of length 1', function() {
    assert.deepEqual(middle([1]), []);
  });

  it('should return an empty array for an input array of length 2', function() {
    assert.deepEqual(middle([1, 2]), []);
  });

  it('should return the middle element for an input array of odd length', function() {
    assert.deepEqual(middle([1, 2, 3]), [2]);
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it('should return the two middle elements for an input array of even length', function() {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
