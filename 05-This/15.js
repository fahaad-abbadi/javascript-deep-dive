const Cat = function(name, sound) {
    this.name = name;
    this.sound = sound;
    this.makeSound = function() {
        console.log(this.name + ' says: ' + this.sound);
    };
    this.annoy = function() {
        let count = 0,
            max = 100;
        const t = setInterval(function() {
            this.makeSound(); // <-- this line fails with `this.makeSound is not a function` 
            count++;
            if (count === max) {
                clearTimeout(t);
            }
        }, 500);
    };
}

const kitty = new Cat('Fat Daddy Cat', 'Mrrooowww');
kitty.annoy();