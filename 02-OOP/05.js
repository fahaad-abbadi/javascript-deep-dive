class Computer {
    constructor(cpu, ram) {
        this.cpu = cpu;
        this.ram = ram;
        this.keyboard = "Mechanical Keyboard"
        this.monitor = "LED Screen";
    }

    mouse = () => console.log("This is wired mouse")
}


class Laptop extends Computer {
    constructor(cpu, ram, harddiskType) {
        super(cpu, ram);
        this.harddiskType = harddiskType;
    }

    //over-riding
    mouse = () => console.log(`Mouse pad is used`)
    speakers = () => console.log(`built-in speakers ftw`)
}

class GamingLaptop extends Laptop {
    constructor(cpu, ram, harddiskType, gpu) {
        super(cpu, ram, harddiskType)
        this.gpu = gpu;
        this.cpu = "intel i9";
    }

    display = () => console.log("AMOLED display")
}

// const comp1 = new Computer("intel", "4GB")

// const laptop1 = new Laptop("AMD", "8GB", "SSD")
// const laptop2 = new Laptop("intel", "8GB", "HDD")

// const gl1 = new GamingLaptop("AMD", "8GB", "SSD", "RYZEN")
const gl2 = new GamingLaptop()
gl2.mouse();