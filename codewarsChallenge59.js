// Super = keyword is used in classes to call the constructor or
//         access the properties and methose of a parent(supperClass)
//         this = this object
//         super = the parent

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age

    }

}
class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;

    }
}

class Fish extends Animal{
    // Calls the parent class constructor to initialize name and age properties.
    constructor(name, age, swimSpeed){
        super(name, age); 
        this.swimSpeed = swimSpeed;

    }
}

class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = runSpeed;

    }

}


const rabbit = new Rabbit ("rabbit", 1, 25)
const fish = new Fish ("fish", 1, 25)
const hawk = new Hawk ("hawk", 3, 50)


console.log(rabbit.name);
console.log(rabbit.age)
console.log(rabbit.swimSpeed)