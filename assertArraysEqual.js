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

// Calling assertArraysEqual
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
assertArraysEqual(arr1, arr2);  // Output: ✅ Assertion Passed: [1,2,3] === [1,2,3]

const arr3 = [1, 2, 3];
const arr4 = [3, 2, 1];
assertArraysEqual(arr3, arr4);  // Output: ❌ Assertion Failed: [1,2,3] !== [3,2,1]
