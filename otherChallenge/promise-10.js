let fast = new Promise((resolve, reject)=>{
  setTimeout(()=> resolve("Fast one"), 1000);
})

let moderate = new Promise((resolve, reject)=>{
  setTimeout(()=> resolve("moderate one"),2000);
})

let slow = new Promise ((resolve, reject)=>{
  setTimeout (()=> resolve("Slow one"), 3000);
})


Promise.race([fast, moderate, slow])

  .then(result=>{
    console.log("Winner:", result);
  })
  .catch(error=>{
    console.error("First to fail", error);
  })