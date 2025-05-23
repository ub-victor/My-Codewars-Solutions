const me = { username: 'JohnDoe' , country: 'USA' };

Object.assign(me, { age: 30, country: 'Canada' }); // { username: 'JohnDoe', country: 'Canada', age: 30 }

console.log(me);