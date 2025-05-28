/**
 * Checks if elements in an array represent vowel character codes and replaces them with the corresponding vowel character.
 *
 * @param {number[]} a - An array of numbers representing character codes.
 * @returns {(number|string)[]} A new array where numbers corresponding to vowels are replaced by their character, others remain unchanged.
 */

function isVow(a){
  return a.map(x =>{
  if(/[aeiou]/.test(String.fromCharCode(x))){
    return String.fromCharCode(x);
  } return x;
});
               
}

console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]));