const array1 = [1, 2, 3, 4, 5];

// 0 + 1 + 2 + 3 + 4 + 5 = 15
const  initialValue = 0;
const sumWithInitial = array1.reduce((acc, curr) => acc + curr, initialValue,);

console.log(sumWithInitial); // 15