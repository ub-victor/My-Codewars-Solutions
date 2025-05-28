function sum(callback, x, y){
    let result  = x+y
    callback(result);
}
sum(displayConsole, 4, 4);

function displayConsole(result){
  console.log("my result is" + result);
}