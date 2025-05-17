function findAverage(array) {
  // your code here
 
  let sum = 0;
      for(i= 0; i < array.length; i++){
          sum+= array[i];
  
        } return sum/ array.length;
  
 
  
  }

 console.log(findAverage([5,5,5,5]));



 // Using one line of code
//  function findAverage(array) {
//   return array.reduce((sum, num) => sum + num, 0) / array.length;
// }
// console.log(findAverage([5, 5, 5, 5]));
  
 