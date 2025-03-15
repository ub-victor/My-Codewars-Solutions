// Create a Promise Object
let myPromise = new Promise((myResolve, myReject) => {
    let result = true 
    //Code that take time goes here
    if(result == true){
        myResolve("OK");
    }
    else{
        myReject("Error");
    }

});

// Using then() to display the result
myPromise // A Promise object representing an asynchronous operation
    .then(
        x => myDisplay(x), // Arrow function to handle the resolved value of the Promise
        x => myDisplay(x)  // Arrow function to handle the rejected reason of the Promise
    );