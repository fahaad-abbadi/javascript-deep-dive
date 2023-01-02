//lets create a small function with promise
function toppings_choice() {
    return new Promise((resolve, reject) => {

        resolve(console.log("which topping would you love?"))
    })
}


// The keyword await makes JavaScript wait until a promise settles and returns its result.
async function kitchen() {

    console.log("A")
    console.log("B")
    console.log("C")

    await toppings_choice()

}

// Trigger the function

kitchen();

console.log("doing the dishes");
console.log("cleaning the tables");
console.log("taking orders");
//see the results