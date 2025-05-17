const array1 = [1, 2, 3, 4, 5];

// 0 + 1 + 2 + 3 + 4 + 5 = 15
const  initialValue = 0;
const sumWithInitial = array1.reduce((acc, curr) => acc + curr, initialValue,);
//const argWithInitial = array1.reduce((acc, curr) => acc + curr, initialValue)/ array1.length;
//console.log(argWithInitial); // 3

console.log(sumWithInitial); // 15