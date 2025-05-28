let pattern = /^cat$/; // This // pattern matches the exact string "cat" , ^ means start, $ means end
console.log(pattern.test("cat")); // true
console.log(pattern.test("cats")); // false