// const doSomething = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Doing something...");
//             resolve("Result of doSomething");
//         }, 1000);
//     });
// };

doSomething ()
    .then (result =>{
        return doNextTHing(result);
    })
    .catch(error=>{
        console.error("Error in doNextThing", error);
    })
    .then(result =>{
        return doAnotherThing(result);
    })
    .catch(error=>{
        console.error("Error in doAnotherThing", error);
    })