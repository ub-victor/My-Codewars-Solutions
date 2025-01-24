let nums = [2, -4, 6, 8, -3, 11, -78];  

// Step 1: Change negatives to positives and vice versa  
let changedSigns = nums.map(num => num * -1);   

// Step 2: Sort the new array in ascending order  
let sortedArray = changedSigns.sort((a, b) => a - b);  

console.log(sortedArray);