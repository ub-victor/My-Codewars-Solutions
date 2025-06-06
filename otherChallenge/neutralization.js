console.log(neutralise('abc', 'abc')); // 'abc'
console.log(neutralise('abc', 'abd')); // '0'

function neutralise(s1, s2) {
    let result = '';
    for (let i = 0; i < s1.length; i++) {
        const c1 = s1[i];
        const c2 = s2[i];
        if (c1 === c2) {
            result += c1;
        }else {
            result += '0'
        }
    }
    return result;
}

console.log(neutralise('++++', '++--'));
console.log(neutralise('++--', '----')); 


// an other way of doing it for the same problem but with different rules +// if both are + then return + // if both are - then return -// else return 0    

function neutralization(s1, s2) {
    let result = '';
    for (let i = 0; i < s1.length; i++) {
        const c1 = s1[i];
        const c2 = s2[i];
        if (c1 === '+' && c2 === '+') {
            result += '+';
        } else if (c1 === '-' && c2 === '-') {
            result += '-';
        } else {
            result += '0';
        }
    }
    return result;
}

console.log(neutralization('++++', '++--'));
console.log(neutralization('++--', '----'));