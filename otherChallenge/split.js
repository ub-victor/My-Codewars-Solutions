const str = "The quick brown fox jumps over the lazy dog";
const words = str.split(" ");

console.log(words); // ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]  
console.log(words[3]); // "fox"

const chars = str.split(""); // Split into characters
console.log(chars); // ["T", "h", "e", " ", "q", "u", "i", "c", "k", " ", "b", "r", "o", "w", "n", " ", "f", "o", "x", ...]
console.log(chars[0]); // "T"

const strCopy = str.split(); // Split without arguments returns an array with the original string
console.log(strCopy); // ["The quick brown fox jumps over the lazy dog"]    