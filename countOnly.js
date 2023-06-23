// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allIteams: an array of strings that we need to look through
// ItemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {}; // Create an empty object to store the counts
  for (const item of allItems) {
    console.log(item); // Print each item to the console (for debugging)
    if (itemsToCount[item]) { // Check if the item should be counted
      if (results[item]) { // Check if the item already exists in the results object
        results[item] += 1; // Increment the count if the item exists
      } else {
        results[item] = 1; // Set the count to 1 if the item doesn't exist yet
      }
    }
  }
  return results; // Return the object with the counts
};

// Test code
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
]; // Create an array of first names

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }); // Call the countOnly function with the firstNames array and an object specifying names to count

assertEqual(result1["Jason"], 1); // Assert that the count of "Jason" is 1
assertEqual(result1["Karima"], undefined); // Assert that the count of "Karima" is undefined
assertEqual(result1["Fang"], 2); // Assert that the count of "Fang" is 2
assertEqual(result1["Agouhanna"], undefined); // Assert that the count of "Agouhanna" is undefined

