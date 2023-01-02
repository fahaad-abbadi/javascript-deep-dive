class Car {
    constructor(speed, fuel) {
        this.speed = speed;
        this.fuel = fuel;
    }

    accelarate = () => console.log(`The ${this.speed} is increased twice`);
    tankCapacity = () => console.log(`Capacity of fuel tank is ${this.fuel}`);
}

//on the child class
//we use the 'extends' keyword to declare the parent class we want to inherit frofm
class SUV extends Car {
    constructor(speed, fuel, seat) {

        //we use the 'super' function to indicate that property is declared on the parent class
        super(speed, fuel);

        this.seat = seat;
        this.nitro = "No nitro";
    }

    //over-riding
    accelarate = () => console.log(`${this.speed * 10}`);
    automatic = () => console.log("Automatic door started")
    gear = () => console.log("Car Started");
    break = () => console.log("Stopped");
}


class Tesla extends Car {
    constructor(speed, fuel, nitro, gps) {
        super(speed, fuel);

        this.electric = true;
        //in-built gps
        this.gps = gps;
        this.nitro = nitro;
    }

    selfDrive = () => console.log(`It's driving on itself!`);
    backCamera = () => console.log(`loading...`)
}



const car = new Car(128, 56);
const suv1 = new SUV(120, 25, 7);
car.accelarate();
suv1.accelarate();
console.log(suv1.speed);

const tesla1 = new Tesla(225, 35, true, true);
tesla1.accelarate();