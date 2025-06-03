const done = true ; 


const isItDoneYet = new Promise((resolve, reject)=>{
    if(done){
        resolve("Here is the thing I built for you!");
    }else{
        reject("Still eorking on something else!");
    }
})


isItDoneYet
    .then(message =>{
        console
    })
    .catch (error =>{
        console.error(error);
    })