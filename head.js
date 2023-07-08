const assertEqual = require('./assertEqual');

const head = function(first) {
  if (first.length === 0) {
    return undefined;
  }
  return first[0];
};

module.exports = head;
