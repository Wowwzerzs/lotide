const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  // Check if the lengths of the arrays are different
  if (arr1.length !== arr2.length) {
    return false; // Return false if lengths are different
  }
  // Iterate over the indices of arr1
  for (let i = 0; i < arr1.length; i++) {
    // Compare elements at the same index of arr1 and arr2
    if (arr1[i] !== arr2[i]) {
      return false; // Return false if elements are different
    }
  }
  // Return true if all elements match
  return true;
};


console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
