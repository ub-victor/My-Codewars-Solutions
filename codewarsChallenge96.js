/**
 * Title: Simple Regular Expression Pattern Matching Example
 * 
 * Summary: 
 * Demonstrates the use of a regular expression in JavaScript to test whether the string "hello"
 * appears at the beginning of a given input string. The code logs the result of testing two different
 * strings against the pattern.
 */
let pattern  = /hello/

console.log(pattern.test("hello world")); // true
console.log(pattern.test("hi there")); // false  


/**
 * Regular Expression: Digit Matcher
 *
 * This regular expression pattern matches any single digit character (0-9).
 * Useful for validating or extracting numeric digits from strings.
 */
let pattern = /\d/; // This pattern matches any digit (0-9)
console.log(pattern.test("abc123")); // true
console.log(pattern.test("abc")); // false


/**
 * Regular Expression: Exact Match for "cat"
 *
 * This regular expression pattern matches only the exact string "cat".
 * It does not match substrings or variations; the input must be exactly "cat".
 */
let pattern = /^cat$/; // This // pattern matches the exact string "cat" , ^ means start, $ means end
console.log(pattern.test("cat")); // true
console.log(pattern.test("cats")); // false


/**
 * Regular expression to match words that start with the letter 'b'.
 *
 * This pattern uses the word boundary anchor (`\b`) to ensure that the match occurs at the start of a word,
 * followed by the letter 'b' and then zero or more word characters (`\w*`). The global flag (`g`) allows matching all occurrences in a string.
 */
let pattern = /\bb\w*/g; // The first 'b' is a word boundary (\b), ensuring 'b' is at the start of a word; the second 'b' matches the letter 'b' itself.
console.log("banana boat tomabto".match(pattern)); // ["b", "b"] - matches 'b' at the start of 'banana' and 'boat' and ignores 'tomato' since it doesn't start with 'b' by ouptputting an array of matches