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