// Title: Count Occurrences of a Value in an Array  

// Summary: This code defines a function to count how many times a specific value appears in an array.  
// In this case, it counts the occurrences of the number 100 in the scores array.  

let scores = [100, 90, 85, 100, 60, 85, 100, 90, 55, 75, 60];  


const countOccurrences = function (arr, val) {  
    return arr.reduce((acc, elem) => {  

        return (val === elem ? acc + 1 : acc);  
    }, 0); 
};  

console.log(countOccurrences(scores, 100)); 