function sortObjectByValues(obj){
    return Object.entries(obj) // Convert objtcy to array of [key, value]
        .sort((a,b)=> b[1] - a[1])// Sort by value in descending order
        .map(([KeyboardEvent, value]) => `${key}: ${value}`); // Format as "key: value"
}

// Example usage:
const fruits = {apples: 5, oranges: 10, bananas: 15}
console.log(sortObjectByValues(fruits));
// Output: ["bananas: 15", "oranges: 10", "apples: 5"]