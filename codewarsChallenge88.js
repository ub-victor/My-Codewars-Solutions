function updateLight(current) {
  
  //your code here!
  
  if(current === "green"){
    return "yellow";
  }else if(current === "yellow"){
    return "red";
  }else if (current = "red"){
    return "green";
  }else {
    return "The traffic light is off";
  }
  
}

console.log(updateLight("green"));


// Using Switch Statement
// function findAverage(array) {
//   return array.reduce((sum, num) => sum + num, 0) / array.length;
// }
// console.log(findAverage([5, 5, 5, 5]));