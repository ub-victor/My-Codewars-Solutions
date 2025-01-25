window.onload = function() { 
    const user = {
        name: 'Bob',
        age: 30,
        greet: function() {
          return `My name is ${this.name} and I am ${this.age} years old.`;
        }
    };
    console.log(user.greet());
    
  }