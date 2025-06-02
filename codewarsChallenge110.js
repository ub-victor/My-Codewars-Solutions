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
