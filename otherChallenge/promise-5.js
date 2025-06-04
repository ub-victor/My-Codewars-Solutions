new promise((resolve, reject) => {
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
    console.log("Third then:", result);
    return result + 1;
})