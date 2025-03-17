class Tree {
    constructor(size = "10", leaves = {spring: 'green', summer: "green", fall: "orange", winter: null}){
        this.size = size;
        this.leaves = leaves;
        this.leafColar = this.leafColar;
    }
    changeSeason(season){
        this.leafColar = this.leaves[season] 
        if(season === "spring"){
            this.size += 1;
        }
    }
}

class Maple extends Tree {
    constructor(syrupQty = 15, size, leaves){
        super(size, leaves);
        this.syrupQty = syrupQty;
    }
    changeSeason(season){
        super.changeSeason(season);
        if (season === "spring") {
            this.syrupQty += 1
        }
    }
    
}