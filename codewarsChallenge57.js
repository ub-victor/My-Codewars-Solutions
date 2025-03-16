function createGrid([width = 5, height = 5]){
    return `Generates a ${width} x ${height} grid`
}

console.log(createGrid([])); // Generates a 5 x 5 grid
console.log(createGrid([2])); // Generates a 2 x 5 grid
console.log(createGrid([2, 3])); // Generates a 2 x 3 grid
console.log(createGrid([undefined, 3])); // Generates a 5 x 3 grid

// There is a problem with this though, the following code will not work:

createGrid(); // throws an error