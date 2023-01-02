//function declaration
function sum(a, b) {
    return a + b;
}

//function call
//the return value can be stored in variable
var c = sum(4, 3);
console.log(c);






//other example
function mul(a, b) {
    return a * b;
}
console.log(mul(5, 6));

//function expressions
const value = function(num1, num2) {
    return num1 / num2;
}

let d = value(8, 2);
console.log(d);
//the above thing doesn't have a funciton name
//these are called anonymous functions

//functions can be used in expressions
function sampleFun(x, y) {
    return x - y;
}

let ans = sampleFun(16, 8) * 10;
console.log(ans);

//ES5 vs ES6 
const exponent1 = function(num1, num2) {
    return num1 ** num2;
}

console.log(exponent1(2, 5));

const exponent2 = (num1, num2) => num1 ** num2;
console.log(exponent2(2, 5));

//parentheses
const remainder = (num1, num2) => num1 % num2;
const mulFive = (num) => num * 5;

//Example without parentheses
const mulTen = num => num * 10;