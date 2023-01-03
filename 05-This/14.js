const Cat = function(name, sound) {
    this.name = name;
    this.sound = sound;
    this.makeSound = function() {
        console.log(this.name + ' says: ' + this.sound);
    };
}

const kitty = new Cat('Fat Daddy Cat', 'Mrrooowww');
kitty.makeSound(); // Fat Daddy says: Mrrooowww