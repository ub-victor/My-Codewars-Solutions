function repeatString(n, s){
    if (n < = 0){
        return ' Error: n must be a positive integer';
    }else {
        return s.repeat(n);
    }
}

console.log(repeatString(3, 'abc')); // 'abcabcabc'