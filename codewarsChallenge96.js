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


