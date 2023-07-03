const eqArrays = function (arr1, arr2) {
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

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`❌ Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

const takeUntil = function (array, callback) {
  const result = []; // Create an empty array to store the result

  for (let item of array) { // Iterate over each item in the array
    if (callback(item)) { // Check if the callback function returns a truthy value for the current item
      return result; // If the callback returns truthy, return the collected items so far
    }
    result.push(item); // If the callback returns falsy, add the item to the result array
  }

  return result; // Return the collected items if the entire array has been processed without meeting the stopping condition
};


// Test Case 1
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log("---")

// Test Case 2
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);


