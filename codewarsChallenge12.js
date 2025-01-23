function getClothing(isCold) {
  if (isCold) {
    
    let freezing = 'Grab a jacket!';
    return freezing;  
  } else {
     
    let hot = 'It’s a shorts kind of day.';
    return hot;  
  }
}

 
console.log(getClothing(true));   
console.log(getClothing(false)); 

