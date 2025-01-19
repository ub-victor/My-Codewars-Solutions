const letters = ["a", "b", "a", "c", "a", "d", "a"];

let count = {};

letters.forEach(item=>{
    
    if(count[iteam]){
        count[item]++
    }else{
        count[item] = 1;
    }
})

console.log(count);