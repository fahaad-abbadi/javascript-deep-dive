class Gardener {
    constructor(name) {
        this.name = name;
    }

    cutting(increaseCount) {
        console.log(`I am ${this.name}! I cut grass fast`)
        increaseCount();
    }
}

class Field {
    constructor(farmers) {
        this.farmers = farmers;
        this.totalPlants = 0;

        this.farmers.forEach(farmer => {
            farmer.cutting(this.increaseCount);
        })
    }

    increaseCount() {
        this.cutting++;
        console.log(`${this.totalPlants} are the total plants`)
    }
}

const gardenerOne = new Gardener('bruh1');
const gardenerTwo = new Gardener('bruh2')

gardenerOne.cutting(0);