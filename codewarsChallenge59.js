// Super = keyword is used in classes to call the constructor or
//         access the properties and methose of a parent(supperClass)
//         this = this object
//         super = the parent

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age

    }
    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}mph`)
    }

}
class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;

    }
    run(){
        console.log(`This ${this.name} can run`)
    }
}

class Fish extends Animal{
    // Calls the parent class constructor to initialize name and age properties.
    constructor(name, age, swimSpeed){
        super(name, age); 
        this.swimSpeed = swimSpeed;

    }
    swim(){
        console.log(`This ${this.name} can swim`)
    }
}

class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;

    }
    fly(){
        console.log(`This ${this.name} can fly`)
    }

}


const rabbit = new Rabbit ("rabbit", 1, 25)
const fish = new Fish ("fish", 1, 25)
const hawk = new Hawk ("hawk", 3, 50)


console.log(rabbit.name);
console.log(rabbit.age)
console.log(rabbit.swimSpeed)

hawk.fly();