// async makes a function return a Promise
// await makes a function wait for a Promise

//format of asyn/await
// The keyword await makes JavaScript wait until a promise settles and returns its result.
async function kitchen() {

    try {
        // Let's create a fake problem      
        await abc;
    } catch (error) {
        console.log("abc does not exist", error)
    } finally {
        console.log("Runs code anyways")
    }
}

kitchen() // run the code