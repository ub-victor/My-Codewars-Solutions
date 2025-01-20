let scores = [100, 90, 85, 100, 60, 85, 100, 90, 55, 75, 60];  


const countOccurrences = function (arr, val) {  
    return arr.reduce((acc, elem) => {  

        return (val === elem ? acc + 1 : acc);  
    }, 0); 
};  

console.log(countOccurrences(scores, 100)); 