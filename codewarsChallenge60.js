class Tree {
    constructor(size = "10", leaves = {spring: 'green', summer: "green", fall: "orange", winter: null}){
        this.size = size;
        this.leaves = leaves;
        this.leafColor = null;
    }
    // This method will change the leaf color based on the season provided.
    /*This defines a function named changeSeason that takes a parameter called season. This parameter is expected to be one of the seasons (like 'spring', 'summer', 'fall', or 'winter'). */
    changeSeason(season){
        this.leafColor = this.leaves[season] 
        if(season === "spring"){
            this.size += 1;
        }
    }
}

class Maple extends Tree {
    constructor(syrupQty = 15, size, leaves){
        super(size, leaves);//Calls the parent Tree constructor using super(), passing the size and leaves parameters to initialize the inherited properties.
        this.syrupQty = syrupQty;
    }
    changeSeason(season){
        super.changeSeason(season);
        if (season === "spring") {
            this.syrupQty += 1
        }
    }
    gatherSyrup(){
        this,this.syrupQty -=3;
    }
}

const myMaple = new Maple(15, 5);

console.log(changeSeason('fall'))// 15,5
console.log(changeSeason())//15,5
console.log(changeSeason('spring'))//16,6
console.log(myMaple.gatherSyrup()); //13 ,6
