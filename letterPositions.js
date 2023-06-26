const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`❌ Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};


const letterPositions = function(sentence) {
  const results = {}; // Create an empty object to store the results

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i]; // Get the character at the current index

    if (char !== ' ') { // Check if the character is not a space
      if (results[char]) { // If the character already exists in the results object
        results[char].push(i); // Add the current index to the existing array of positions
      } else {
        results[char] = [i]; // Create a new array with the current index as the position of the character
      }
    }
  }

  return results; // Return the results object
};

assertArraysEqual(letterPositions("hello").e, [1]);
