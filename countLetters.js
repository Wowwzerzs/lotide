const assertEqual = require('./assertEqual');

const countLetters = function (string) {
  const letterCount = {};

  // Convert the string to lowercase for case-insensitive counting
  const lowercaseString = string.toLowerCase();

  // Iterate over each character in the string
  for (const char of lowercaseString) {
    // Ignore non-alphabetic characters
    if (/[a-z]/.test(char)) {
      // Check if the character already exists in the letterCount object
      if (letterCount[char]) {
        letterCount[char] += 1; // Increment the count if it exists by 1
      } else {
        letterCount[char] = 1; // Set the count to 1 if it doesn't exist yet
      }
    }
  }

  return letterCount;
};

console.log(countLetters("LHL")); // Output: { l: 2, h: 1 }
console.log(countLetters("Hello, world!")); // Output: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
assertEqual(countLetters("LHL"));
assertEqual(countLetters("Hello, world!"));

module.exports = countLetters;