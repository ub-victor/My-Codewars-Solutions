function twoSort(s) {
   let result =  s.sort()
   let final = result[0].plit().join("***")
    return final ;
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));


const twoSort = s => s.sort()[0].split('').join('***');
console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));