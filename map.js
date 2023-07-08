const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];
/* debug-friendly (console.log) statements. 
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
}
*/
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


// Test cases:

// Transforming words to their first letter 
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
// Transforming words to their lengths
const result2 = map(words, word => word.length);
assertArraysEqual(result2, [6, 7, 2, 5, 3]);

// Transforming words to uppercase
const result3 = map(words, word => word.toUpperCase());
assertArraysEqual(result3, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);

// Transforming words to their reversed form
const result4 = map(words, word => word.split('').reverse().join(''));
assertArraysEqual(result4, ["dnuorg", "lortnoc", "ot", "rojam", "mot"]);

module.exports = map;