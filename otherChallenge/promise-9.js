let p1 = Promise.resolve("Good");
let p2 = Promise.reject("Oops!"); // This one fails
let p3 = Promise.resolve("Also good");

Promise.all([p1, p2, p3])
  .then(results => {
    console.log("All passed:", results);
  })
  .catch(error => {
    console.error("At least one failed:", error); // This will run
  });
