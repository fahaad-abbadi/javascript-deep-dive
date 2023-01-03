const Car = {
    name: 'Mercedes',
    maxFuel: 30,
    maxSpeed: 250,
    color: 'red',

    start() {
        console.log(this);

        //usually we write, 'obj.property'
        console.log(this.maxFuel);

        function accelarate() {
            console.log(this);
            console.log(this.maxSpeed);
        }

        accelarate()
    }
}

Car.start();