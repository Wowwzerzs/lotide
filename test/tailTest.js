const assert = require('chai').assert;
const tail = require('../tail');

describe('tail()', function() {
  it('should not modify the original array', function() {
    const words = ['Yo Yo', 'Lighthouse', 'Labs'];
    tail(words);
    assert.strictEqual(words.length, 3);
  });

  it('should return an array with the elements after the first element', function() {
    const result = tail(['Hello', 'Lighthouse', 'Labs']);
    assert.strictEqual(result.length, 2);
    assert.strictEqual(result[0], 'Lighthouse');
    assert.strictEqual(result[1], 'Labs');
  });
});
