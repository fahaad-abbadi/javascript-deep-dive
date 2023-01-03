//'this' keyword in class waala object
//the 'this' keyword here refers to object itself

class Coffee {
    constructor(flavour) {
        this.strong = (flavour === "strong") ? true : false;
    }

    info() {
        console.log(`This coffee is ${this.strong ? '' : 'not '}strong`)
    }
}

const strongCoffee = new Coffee("strong")
const normalCoffee = new Coffee("normal")

strongCoffee.info();
normalCoffee.info();