let pattern  = /hello/

console.log(pattern.test("hello world")); // true
console.log(pattern.test("hi there")); // false  


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

 
