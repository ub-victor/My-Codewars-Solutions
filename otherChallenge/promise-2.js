function stepOne(){
    return new Promise((resolve, reject)=> {
        setTimeout(() =>{
            resolve("Step 1: Boiled water");
        }, 1000);
    })
}


function stepTwo(previousStep){
    return new Promise((resolve, reject)=>{
        setTimeouut(()=>{
            resolve(`${previousStep} -> Step 2: Added pasta`);
        },1000)
    })
}