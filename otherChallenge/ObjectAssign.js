const point1 = { x: 10, y: 20 };
const point0 = point1;
const point2 = {}// false, point1 and point2 are different objects

Object.assign(point2, point0);

console.log(point1); // { x: 10, y: 20 }
console.log(point0); // { x: 10, y: 20 }
console.log(point1 === point0); // true
console.log(point1 === point2); // false, point1 and point2 are different objects   
console.log(point2.x) // 10
console.log(point2.y) // 20
console.log(point2 === point0); // false, point2 is a new object with the same properties as point0
