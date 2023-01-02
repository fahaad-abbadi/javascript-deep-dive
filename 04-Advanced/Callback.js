//step 1
//we can use function calls
function fun1() {
    console.log("Task 1");
}

function fun2() {
    console.log("Task 2")
}

fun1();
fun2();

//use callback
//we can give any word as parameter
function fun3(callback) {
    console.log("Task 3");
    callback();
}

function fun4() {
    console.log("Task 4")
}

fun3(fun4);

//we can write in this way too
function fun5(cb) {
    console.log("Task 5");
    cb();
}

fun5(() => {
    console.log("Task 2");
});

//benefit of callback function
function getTwoNumbersAndAdd(num1, num2, callback) {
    if (typeof num1 === "number" && typeof number2 === "number") {
        callback(num1, num2);
    } else {
        console.log("Wrong Data Type");
    }
}

getTwoNumbersAndAdd(5, 8, () => {
    console.log(num1 + num2);
})