function getCharCodes(name){
    return Array.from(name).map(char => char.charCodeAt(0))
} 


const name = "Victoire";
const codes = getCharCodes(name);
console.log(codes); // Output: [86, 105, 99, 116, 111, 105, 114, 101]