let is_shop_open = true;
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
}

function bruh(t) {
    console.log(t)
}

function time(ms) {

    return new Promise((resolve, reject) => {

        if (is_shop_open) {
            setTimeout(bruh, ms, ms);

            for (let i = 1; i <= 10000; i++) {
                for (let i = 1; i <= 100000; i++) {}
            }
        } else {
            reject(console.log("Shop is closed"))
        }
    });
}


function kitchen() {
    try {
        time(80000)
        console.log(`1. ${stocks.Fruits[0]} was selected`)

        time(1000)
        console.log("2. production has started")

        time(6000)
        console.log("3. fruit has been chopped")

        time(1000)
        console.log(`4. ${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

        time(500)
        console.log("5. start the machine")

        time(200)
        console.log(`6. ice cream placed on ${stocks.holder[1]}`)

        time(100)
        console.log(`7. ${stocks.toppings[0]} as toppings`)

        time(0)
        console.log("8. Serve Ice Cream")
    } catch (error) {
        console.log("customer left")
    }
}

kitchen();