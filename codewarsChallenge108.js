function getCharCodes(name){
    // Create an array of Unicode character codes for each letter in the string
// Each 'char' is a single-character string, so we use charCodeAt(0)
    return Array.from(name).map(char => char.charCodeAt(0))
} 


// Example usage:
const name = "Victoire";
const codes = getCharCodes(name);
console.log(codes); // Output: [86, 105, 99, 116, 111, 105, 114, 101]