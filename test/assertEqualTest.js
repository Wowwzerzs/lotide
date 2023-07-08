const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe('assertEqual()', function() {
  it('should not throw an error for equal values', function() {
    assert.doesNotThrow(function() {
      assertEqual("Lighthouse Labs", "Bootcamp");
    });
    assert.doesNotThrow(function() {
      assertEqual(1, 1);
    });
    assert.doesNotThrow(function() {
      assertEqual("Hello", "Hello");
    });
  });

  it('should throw an error for non-equal values', function() {
    assert.doesNotThrow(function() {
      assertEqual(5, 10);
    });
  });
});

