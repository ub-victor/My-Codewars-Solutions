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

function Tree (size, leaves){
    this.size = (typeof size === "Undefined")? 10 : size;
    const defaultLeaves = {spring: "green", summer: "green", fall: "orange", winter: null};
    this.leaves = (typeof leaves === "undefined")? defaultLeaves : leaves;
    this.leafColor;
}

Tree.prototype.changeSeason = function(season){
    this.leafColor = this.leaves[season]
    if (season === "spring"){
        this.size += 1;

    }
}

function Maple (syrupQty, size, leaves){
    Tree.call(this, size, leaves);
    this.syrupQty = (typeof syrupQty === "undefined")? 15 : syrupQty;
}