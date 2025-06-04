new Promise((resolve, reject) => {
    resolve(10)
})
.then(result =>{
    console.log("First then:", result);
    return result * 2;
})
.then(result =>{
    console.log("second then ", result)
    throw new error("Something failed in the second then");
})
.then(result =>{
    console.log("Third then:", result);// This will not run due to the error in the previous then
    return result + 1;
})

.catch(error => {
    console.error("Caught an error:", error.message); // This will catch the error from the second then
});