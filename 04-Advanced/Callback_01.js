function add(numberOne, numberTwo) {
    console.log(numberOne + numberTwo);
};

function subtract(numberOne, numberTwo) {
    console.log(numberOne - numberTwo);
};


function multiply(numberOne, numberTwo) {
    console.log(numberOne * numberTwo);
};

function divide(numberOne, numberTwo) {
    console.log(numberOne / numberTwo);
};

function calculator(numberOne, numberTwo, callback) {
    console.log(callback(numberTwo, numberOne));
};
calculator(4, 5, add); // console logs 9
calculator(4, 5, subtract); // console logs -1 
calculator(4, 5, multiply); // console logs 20
calculator(4, 5, divide); // console logs 0.8