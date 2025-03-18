class Vehicle {
    constructor(color= 'blue', wheel= 4, horn = 'beep beep') {
        this.color = color;
        this.wheel = wheel;
        this.horn;
    }
    honkHorn(){
        console.log(this.horn)
    }
}

//Bicycle subclass

class Bicycle extends Vehicle{
    constructor(color){
        //Call the parent constructor with overridden value
        super(color, 2, 'honk honk');
    }
}

//test

const myVehicle = new Vehicle();
myVehicle.honkHorn(); // Output: beep beep

const myBike = new Bicycle();
myBike.honkHorn() // Output: honk honk