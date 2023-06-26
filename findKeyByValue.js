const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  // Declares a function named findKeyByValue that takes in an object and a value as parameters.
  for (const key in object) {
    // Starts a for...in loop to iterate over the keys of the object.
    if (Object.prototype.hasOwnProperty.call(object, key) && object[key] === value) {
      // Checks if the object has the current key using the hasOwnProperty method and if the corresponding value is equal to the provided value
      return key; // Return the key if a match is found
    }
  }
  return undefined; // Return undefined if no match is found
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  action: "The Last of Us"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");
