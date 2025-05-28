**Title:**  
Convert Character Codes to Letters Using `map` in JavaScript

**Summary:**  
This code converts an array of character codes to their corresponding letters using `String.fromCharCode` and logs each letter to the console.


let codes = [97, 98, 99, 100]; // 'a', 'b', 'c', 'd'
codes.map(x => {
  console.log(String.fromCharCode(x));
});
// Outputs: 'a', 'b', 'c', 'd'