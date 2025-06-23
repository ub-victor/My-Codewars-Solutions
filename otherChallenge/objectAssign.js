const point1 = { x: 10, y: 20 };
const point0 = point1;
const point2 = {}// false, point1 and point2 are different objects

Object.assign(point2, point0, { z: 30 });

console.log(point1); // { x: 10, y: 20 }
console.log(point1.z); // undefined, point1 does not have a z property
console.log(point2.z); // 30, point2 has a z property added from the Object.assign
console.log(point2); // { x: 10, y: 20, z: 30 }
