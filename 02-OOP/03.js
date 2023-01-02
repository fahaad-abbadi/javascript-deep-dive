// you can see we're repeating code, and that's not optimal.
//Inheritance

//it is the ability to create classes based on other classes.
//with inheritance we can define parent class and then children classes that inherit from parent class
//i.e. inherit properties and methods it has

class Traveller {
    constructor(name, phrase, power) {
        this.name = name;
        this.phrase = phrase;
        this.power = power;

        this.species = "mexican";
    }

    travel = () => console.log("Keep travelling");
    sayPhrase = () => console.log(this.phrase);
    attack = () => console.log(`I'm attacking with power of ${this.power}`);
}

class Ship {
    constructor(name, phrase, power) {
        this.name = name;
        this.phrase = phrase;
        this.power = power;
        this.type = "Water Vehicle";
    }

    transform = () => console.log("bruh");
    sayPhrase = () => console.log(this.phrase);
    attack = () => console.log(`${this.power}`);
}

const traveller1 = new Traveller('Mr Brian Tender', 'I am a solo traveller', "low");
const ship1 = new Ship('cruise', "Atlantic Endeavour", "high");

console.log(traveller1.species);

console.log(ship1.phrase);
ship1.attack();

//we are repeating code and is that efficient?
//is it optimal?
//why write twice?
//is there a solution?



//Yes!
//inheritance