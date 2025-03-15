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
myPromise.then(x => myDisplay(x), x => myDisplay(x));
// Output: OK
myPromise.catch(x => myDisplay(x));