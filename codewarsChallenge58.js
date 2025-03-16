// The function takes an object as a parameter and destructures it
    // to extract the 'scoops' and 'toppings' properties.
    // If 'scoops' is not provided, it defaults to 1.
    // If 'toppings' is not provided, it defaults to an array containing 'Hot Fudge'.

function createSundae({scoops = 1, toppings = ['Hot Fudge']}){
    const scoopText = scoops === 1 ? 'scoop' : "scoops";
    return `Your sundae ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`
}

console.log(createSundae({scoops: 2})); // Your sundae had 2 scoops with Hot Fudge toppings.
console.log(createSundae({})); // Your sundae had 1 scoop with Hot Fudge toppings.
console.log(createSundae({scoops : 2, toppings: ['Sprinkles']})) // Your sundae has 2 scoops with Sprinkles toppings.
console.log(createSundae({toppings: ['Cookie Dough']})) // Your sundae has 1 scoop with Cookie Dough toppings.
console.log(createSundae({scoops : 2, toppings: ['Sprinkles', 'Cookie Dough']})) // Your sundae has 2 scoops with Sprinkles and Cookie Dough toppings.
