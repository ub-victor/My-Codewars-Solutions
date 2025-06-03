function stepOne(){
    return new Promise((resolve, reject)=> {
        setTimeout(() =>{
            resolve("Step 1: Boiled water");
        }, 1000);
    })
}


function stepTwo(previousStep){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`${previousStep} -> Step 2: Added pasta`);
        },1000);
    })
}


function stepThreee(previousStep){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve (`${previousStep} -> Step 3: Drained and added sauce`);
        }, 1000)
    })
}

stepOne()
    .then((result1)=>{
        console.log(result1);
        return stepTwo(result1);
    })
    .then((result2)=>{
        console.log(result2);
        return stepThree(result2);
    })
    .then ((finalResult)=>{
        console.log(finalResult);
    })
    .catch ((error)=>{
        console.error("Something went wrong:", error);
    })