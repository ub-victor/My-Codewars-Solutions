let promise = new Promise((resolve, reject) => {
    // Simulate an error
    let success = false

    if(success){
        resolve("Operation successful!");
    }else{
        reject("Something wen wrong!");
    }
})


promise
    .then(result =>{
        console.log(result);
    })
    .catch(error => {
        console.error("Error:", error);
    });