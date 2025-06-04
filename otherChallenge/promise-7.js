new Promise ((resolve, reject) => {
    resolve("Start");
})
.then(result=>{
    console.log("1st then:", result);
    return "Step 1"
})
.then(result=>{
    console.log("2nd then:", result);
    throw new Error ("Something went wrong here!"); 
})
.then(result =>{
    console.log("3rd then:", result); // This will not run due to the error in the previous then
    return "Step 3";
})

.catch(error => {
    console.error("Caught an error:", error.message); // This will catch the error from the second then
}); 