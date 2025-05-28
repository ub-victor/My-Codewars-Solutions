let pattern  = /hello/

console.log(pattern.test("hello world")); // true
console.log(pattern.test("hi there")); // false  


let pattern = /\bb\w*/g; // The first '

function sum(callback, x, y){
    let result  = x+y
    callback(result);
}
sum(displayConsole, 4, 4);

function displayConsole(result){
  console.log("my result is" + result);
}

 
