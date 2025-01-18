//This code iterates through the 'numbers' array and logs
//  each number doubled to the console.
/*let numbers = [1,2,3,4,5,6];

numbers.forEach(number =>{
console.log(number*2)
});*/

// This code iterates through the 'numbers' array, logs each number 
// doubled along with its index and the complete array.


let numbers = [1,2,3,4,5,6];

numbers.forEach((number ,i,numbers)=>{
console.log(number*2,i,numbers)
});