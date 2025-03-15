let  p = Promise((resolve, reject)=>{
    let a= 1+1
    if(a==2){
        resolve('success')
    }else{
        reject('failed')
    }
});
// the message is passed to the then and catch as a parameter
// the then and catch are the functions of the promise object
p.then((message)=>{    // then is used to resolve the promise
    console.log('this is in the then' + message)        
}).catch((message)=>{// catch is used to catch the error
    console.log('this is in the catch' + message)
})
// Output: this is in the then success