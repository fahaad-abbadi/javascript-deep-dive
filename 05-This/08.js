const monitor = {
    name: 'Dell',
    size: '22 inch',
    maxBrightness: 10,

    turnOn() {
        console.log(this);
        console.log(this.size);

        let brightness = () => {
            console.log(this);
            console.log(this.maxBrightness)
        }

        brightness();
    }
}

monitor.turnOn();