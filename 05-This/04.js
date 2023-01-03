//inside object
const Car = {
    name: 'Volvo',
    maxSpeed: 250,
    color: 'grey',

    //this inside method
    //this refers to the object itself
    start() {
        console.log(this)
        console.log(this.name);
    }
}

Car.start();

//this refers to the object when inside the object