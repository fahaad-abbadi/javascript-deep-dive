//arrow functions inside object

const plant = {
    name: 'rose',
    color: 'yellow',

    water() {
        let result = () => console.log(this.name);
        result();
    }
}

plant.water();