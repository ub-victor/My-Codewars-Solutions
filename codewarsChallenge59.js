// Super = keyword is used in classes to call the constructor or
//         access the properties and methose of a parent(supperClass)
//         this = this object
//         super = the parent

class Animal{
    constructor(){

    }

}
class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        this.name = name;
        this.age = age;
        this.runSpeed = runSpeed;

    }
}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        this.name = name;
        this.age = age;
        this.swimSpeed = swimSpeed;

    }
}

class Hawk extends Animal{
    constructor(name, age, flySpeed){
        this.name = name;
        this.age = age;
        this.flySpeed = runSpeed;

    }

}