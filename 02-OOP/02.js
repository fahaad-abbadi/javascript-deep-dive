//the 'this' keyword points to the class itself and 
// is used to define the class properties within the constructor 

class Student {
    constructor(name, country) {
        this.name = name;
        this.country = country;
    }

    fly = () => console.log(`${this.name} is the player who Jumps high`);
    nationality = () => console.log(`my country is ${this.country}`);
}

class Device {
    constructor(name, configuration) {
        this.name = name;
        this.configuration = configuration;

    }

    run = () => console.log(`The device ${this.name} is running...`);
    info = () => console.log(`The device has got ${this.configuration}`);
}


class Book {
    constructor(name, author, genre) {
        this.name = name;
        this.author = author;
        this.genre = "Psychological";
    }

    turnPages = () => console.log(`Turning...`)
}

//after that we can intantiate our characters like this
//use this syntax
//the 'new' keyword creates an object
const std1 = new Student("Ali", "Murica");
const std2 = new Student("Mango", "Canada");

std1.fly();
std1.nationality();

std2.fly();
std2.nationality();

//Gadgets
const dev1 = new Device("Antenna", "XR101");
const dev2 = new Device("Scraping Bot", "YT65");

dev1.run();
dev1.info();

dev2.run();
dev2.info();

const book1 = new Book("How to crack interview?", "Johnnathan");
const book2 = new Book("Five things after three things", "Ph.D Isaac Arlington");


//now we can access objects more easily
console.log(book1.name);
console.log(book1.genre);

book2.turnPages();

//the good thing about this approach is that we use classes in general
//they are like blue print to create objects

//few key points
//classes are not actual objects
//classes are declared with a capital first letter or CamelCase by convention

//constructor in class is used to instantiate that class