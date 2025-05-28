let pattern  = /hello/

console.log(pattern.test("hello world")); // true
console.log(pattern.test("hi there")); // false  




 
/**
 * 
 *

 */
let pattern = /\bb\w*/g; // The first 'b' is a word boundary (\b), ensuring 'b' is at the start of a word; the second 'b' matches the letter 'b' itself.
console.log("banana boat tomato".match(pattern)); // ["b", "b"] - matches 'b' at the start of 'banana' and 'boat' and ignores 'tomato' since it doesn't start with 'b' by ouptputting an array of matches


/**
 * 
 *
 * 
 */


// Title:
// Callback Function Example: Summing Two Numbers

// Summary:
// This code defines a sum function that adds two numbers and passes the result to a callback function. It demonstrates using callbacks by printing the sum to the console with a separate displayConsole function.

function sum(callback, x, y){
    let result  = x+y
    callback(result);
}
sum(displayConsole, 4, 4);

function displayConsole(result){
  console.log("my result is" + result);
}

 
