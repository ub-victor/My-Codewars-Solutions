class Tree {  
    constructor(size = "10", leaves = {spring: 'green', summer: "green", fall: "orange", winter: null}) {  
        this.size = size;  
        this.leaves = leaves;  
        this.leafColor = null;   
    }  

    changeSeason(season) {  
        this.leafColor = this.leaves[season];  
        if (season === "spring") {  
            this.size += 1;  
        }  
        return [this.syrupQty, this.size]; // Return size & syrupQty for logging  
    }  
}  

class Maple extends Tree {  
    constructor(syrupQty = 15, size, leaves) {  
        super(size, leaves); // Calls the parent Tree constructor  
        this.syrupQty = syrupQty;  
    }  

    changeSeason(season) {  
        super.changeSeason(season); // Call the parent method to change season  
        if (season === "spring") {  
            this.syrupQty += 1;  
        }  
        return [this.syrupQty, this.size]; // Return syrupQty & size for logging  
    }  

    gatherSyrup() {  
        this.syrupQty -= 3;  
        return this.syrupQty; // Return updated syrupQty for logging  
    }  
}  

const myMaple = new Maple(15, 5); // Creates a new Maple instance  

// Call changeSeason on the myMaple instance  
console.log(myMaple.changeSeason('fall')); // Outputs: [15, 5]  
console.log(myMaple.changeSeason()); // This call does not provide argument, which may cause undefined behavior. If you want to see fall again, provide 'fall' or some valid season.  
console.log(myMaple.changeSeason('spring')); // Outputs: [16, 6]  
console.log(myMaple.gatherSyrup()); // Outputs: 13  



// Using a Function to to the same

/*

function Tree(size, leaves) {
    // Set the size property, default to 10 if size is undefined
    this.size = (typeof size === "undefined") ? 10 : size;
    // Define default leaves for the tree
    const defaultLeaves = {spring: "green", summer: "green", fall: "orange", winter: null};
    // Set the leaves property, default to defaultLeaves if leaves is undefined
    this.leaves = (typeof leaves === "undefined") ? defaultLeaves : leaves;
    // Initialize leafColor property
    this.leafColor;
}

// Add changeSeason method to Tree prototype
Tree.prototype.changeSeason = function(season) {
    // Set the leafColor based on the season
    this.leafColor = this.leaves[season];
    // If the season is spring, increase the size by 1
    if (season === "spring") {
        this.size += 1;
    }
}

function Maple(syrupQty, size, leaves) {
    // Call the Tree constructor with size and leaves
    Tree.call(this, size, leaves);
    // Set the syrupQty property, default to 15 if syrupQty is undefined
    this.syrupQty = (typeof syrupQty === "undefined") ? 15 : syrupQty;
}

// Set the prototype of Maple to be an instance of Tree
Maple.prototype = Object.create(Tree.prototype);
// Set the constructor property of Maple prototype to Maple
Maple.prototype.constructor = Maple;

// Add changeSeason method to Maple prototype
Maple.prototype.changeSeason = function(season) {
    // Call the changeSeason method of Tree
    Tree.prototype.changeSeason.call(this, season);
    // If the season is spring, increase the syrupQty by 1
    if (season === "spring") {
        this.syrupQty += 1;
    }
}

// Add gatherSyrup method to Maple prototype
Maple.prototype.gatherSyrup = function() {
    // Decrease the syrupQty by 3
    this.syrupQty -= 3;
}

// Create a new instance of Maple with syrupQty 15 and size 5
const myMaple = new Maple(15, 5);
// Change the season to fall
myMaple.changeSeason('fall');
// Gather syrup, decreasing syrupQty by 3
myMaple.gatherSyrup();
// Change the season to spring
myMaple.changeSeason('spring');

*/