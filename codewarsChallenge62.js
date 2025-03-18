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


function Vehicle(color = 'blue', wheels = 4, horn = 'beep beep'){
    this.color = color
    this.wheel = wheels;
    this.horn = horn;
}

Vehicle.prototype.honkHorn = function(){
    console.log(this.horn);
}

// Bicycle Constructor function

function Bicycle(color){
    // Call the vehicle constructor with overidden values
    Vehicle.call(this, color, 2, 'honk honk');
}

// Inherit from Vehicla
Bicycle.prototype = Object.create(Vehicle.prototype);
