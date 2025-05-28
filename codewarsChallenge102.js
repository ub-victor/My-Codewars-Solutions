function isVow(a){
  return a.map(x =>{
  if(/[aeiou]/.test(String.fromCharCode(x))){
    return String.fromCharCode(x);
  } return x;
});
               
}

console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]));