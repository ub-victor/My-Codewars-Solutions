function greet (name, greeting){
    // Set default values if parameters arw undefined
    name = (typeof name !== 'undefined') ? name : 'Student';
    greeting = (typeof greeting !== "undefined")? greeting : "Welcome"
    return `${greeting} ${name}!`
}

// Test cases

console.log(greet());
console.log(greet('James'));
console.log(greet("Victoire", "La victoire"))

// Here is how it can be done is ES6 
/*
function greet(name = "Student", greeting = 'Welcome'){
    return `{greeting} ${name}!`
}
*/