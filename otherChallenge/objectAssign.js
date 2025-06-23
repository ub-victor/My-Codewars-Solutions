const point1 = { x: 10, y: 20 };
const point0 = point1;
const point2 = {}// false, point1 and point2 are different objects

Object.assign(point2, point0, { z: 30 });
// Properties with the same name will be overwritten
// point2 now has properties from point0 and the new property z
var point3 = {};
Object.assign(point3, point2, {z: 200, color: "red"});

console.log(point3) // { x: 10, y: 20, z: 200, color: 'red' }
console.log(point1); // { x: 10, y: 20 }
console.log(point1.z); // undefined, point1 does not have a z property
console.log(point2.z); // 30, point2 has a z property added from the Object.assign
console.log(point2); // { x: 10, y: 20, z: 30 }
console.log(point3); // { x: 10, y: 20, z: 200, color: 'red' }