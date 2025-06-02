// function repeatString(n, s){
//     if (n < = 0){
//         return ' Error: n must be a positive integer';
//     }else {
//         return s.repeat(n);
//     }
// }

// console.log(repeatString(3, 'abc')); // 'abcabcabc';


//or

function repeatString(n, s) {
    if (n <= 0){
        return "Error: n must be a positive integer";
    }else {
        let result = '';
        for (let i = 0; i < n; i++){
            result += s;
        }return result;
    }
}

**Title:**  
Repeat a String N Times with Input Validation

**Summary:**  
This code defines a function repeatString(n, s) that returns a string s repeated n times. If n is not a positive integer, it returns an error message. The function uses a for loop to concatenate the string s n times.
