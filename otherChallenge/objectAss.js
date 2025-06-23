let point0 = {x:10, y: 20 };
let point2 = { ...point0};
let point3 = { ...point0, z: 100};// here insead of Object.assign we are using spread operator the the objects with spread operator means that we are creating a new object with the properties of the existing object and adding new properties to it.
console.log(point2 === point3); // false, point2 and point3 are different object



console.log(point0); // { x: 10, y: 20 }
console.log(point2); // { x: 10, y: 20 }
console.log(point3); // { x: 10, y: 20, z: 100 }
console.log(point0 === point2); // false, point0 and point2 are different objects
console.log(point0 === point3); // false, point0 and point3 are different objects
console.log(point2 === point3); // false, point2 and point3 are different objects
console.log(point2.z); // undefined, point2 does not have a z property
console.log(point2.x); // 10
console.log(point2.y); // 20
console.log(point3.z); // 100
console.log(point3.x); // 10
console.log(point3.y); // 20    