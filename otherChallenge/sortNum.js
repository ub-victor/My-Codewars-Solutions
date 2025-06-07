function sumNum(a,b,c){
    return [a,b,c].sort((x,y)=> y-x) //Here is to arrance in Descending order, Ascending order means arranging items from smallest to largest (or earliest to latest).
}

console.log(sumNum(-3,0,4));