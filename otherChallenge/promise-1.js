const done = false ; 


const isItDoneYet = new Promise((resolve, reject)=>{
    if(done){
        resolve("Here is the thing I built for you!");
    }else{
        reject("Still working on something else!");
    }
})


// isItDoneYet
//     .then(message =>{
//         console.log(message);
//     })
//     .catch (error => {
//         console.error(error);
//     })

// async /wait syntax


async function checkIfDone() {
    try {
        const result = await isItDoneYet;
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}