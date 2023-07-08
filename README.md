# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tahamulla/lotide`

**Require it:**

`const _ = require('@tahamulla/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- assertEqual: Compare 2 values and return true if they are equal and false otherwise.

- head: Return the first element of an array.

- tail: Return everything except the first element of an array.

- eqArrays: Check if 2 arrays are equal and return true or false.

- assertArraysEqual: Print an appropriate message after comparing two arrays.

- without: Return items from a source array that are not in an itemsToRemove array.

- flatten: Flatten an array that may contain nested arrays.

- middle: Return the middlemost element of an array.

- countOnly: Count specific items in a collection.

- countLetters: Count the occurrences of each letter in a sentence.

- letterPositions: Return the indices of letter positions in a string.

- findKeyByValue: Find the first key that corresponds to a given value in an object.

- eqObjects: Check if two objects are equal and return true or false.

- assertObjectsEqual: Print an appropriate message after comparing two objects.

- map: Apply a callback function to each item in an array and return a new array.

- takeUntil: Create a slice of an array based on a condition specified by a callback function.

- findKey: Find the first key in an object that meets a specified condition.