let point0 = {x:10, y: 20 };
let point1 = point0;    // copy reference
let point2 = {};
Object.assign(point2, point0);  //  copy properties into the new object
console.log(point2.x);
console.log(point2.y);
console.log(point1.y);
console.log(point1 === point0); // true
console.log(point1 === point2); // false
console.log(point0 === point2); // false
