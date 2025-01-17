function validBraces(braces) {  
    
    const stack = [];  
    
    
    const openBraces = '([{';  
    const closeBraces = ')]}';  
    
      
    const matchingBraces = {  
        ')': '(',  
        ']': '[',  
        '}': '{'  
    };  

    
    for (let char of braces) {  
    
        if (openBraces.includes(char)) {  
            
            stack.push(char);  
        }   
        
        else if (closeBraces.includes(char)) {  
            
            if (stack.length === 0 || stack.pop() !== matchingBraces[char]) {  
                
                return false;  
            }  
        }  
    }  
    
     
    return stack.length === 0;  
}  

 
console.log(validBraces("(){}[]"));   // => True, all braces match correctly  
console.log(validBraces("([{}])"));   // => True, all braces match correctly  
console.log(validBraces("(}"));       // => False, mismatched brace  
console.log(validBraces("[(])"));     // => False, order of braces is incorrect  
console.log(validBraces("[({})](]")); // => False, unmatched closing brace