// Create 3 simple promises
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("First finished"), 1000); // resolves after 1 second
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Second finished"), 2000); // resolves after 2 seconds
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Third finished"), 1500); // resolves after 1.5 seconds
});

// Orchestrate them using Promise.all
Promise.all([p1, p2, p3])
  .then(results => {
    console.log("All done:", results); // Logs array of results from all promises
  })
  .catch(error => {
    console.error("One failed:", error); // Will run if any promise fails
  });

  // Orchestrate them using promise.all

// Orchestrate them using async/await
// async function processPromises() {
//     try{
//         const results = await Promise.all([p1, p2, p3]);
//         console.log("All done :", results); // Logs array of results from all promises
//     }
//     catch(error) {
//         console.error("One failed:", error); // Will run if any promise fails
//     }
// }
  