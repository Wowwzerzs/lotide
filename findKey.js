const assertEqual = require('./assertEqual');

const findKey = function (object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

// Testing the findKey function
const restaurantData = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

// Test case 1: Finding a key that satisfies the callback condition
assertEqual(findKey(restaurantData, x => x.stars === 2), "noma");

// Test case 2: Finding a key that doesn't exist
assertEqual(findKey(restaurantData, x => x.stars === 4), undefined);

module.exports = findKey;