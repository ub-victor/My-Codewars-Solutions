// Create a function to display the result  
function myDisplay(message) {  
    console.log(message); // Display the message in the console  
}  

// Create a Promise Object  
let myPromise = new Promise(function(myResolve, myReject) {  
    let result = true; // Simulate an operation result  

    // Code that may take some time goes here  
    // For example, you can use setTimeout to simulate delay.  

    setTimeout(() => {  
        if (result == true) {  
            myResolve("OK"); // Resolve the promise with "OK"  
        } else {  
            myReject("Error"); // Reject the promise with "Error"  
        }  
    }, 1000); // Simulate 1 second delay  
});  

// Using then() to display result  
myPromise.then(  
    x => myDisplay(x), // Handle resolved promise  
    x => myDisplay(x)  // Handle rejected promise  
);  