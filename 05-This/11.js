const smartphone = [{
        name: 'Samsung',
        fiveG: false,
        info: function() {
            console.log(`${this.name} is ${this.fiveG ? '' : 'without '}5G`)
        }
    }, {
        name: 'Vivo',
        fiveG: false,
        info: function() {
            console.log(`${this.name} is ${this.fiveG ? '' : 'without '}5G`)
        }
    },
    {
        name: 'Apple',
        fiveG: true,
        info: function() {
            console.log(`${this.name} is ${this.fiveG ? ' ' : 'without '}5G`)
        }
    }
]

function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

pickRandom(smartphone).info()