//scope refers to where in our code variables are available for use
//globally scoped means it's available everywhere
// Sending GIT CHANGES

var num1 = 12;

function f1() {
  var num1 = 10;
  console.log(num1);
}

f1();
console.log(num1);

//In the above program, var is globally scoped, hence it's available everywhere, including inside of a function

//below is function scoped variable
// function f2() {
//     var num2 = 29;
// }

// console.log(num2);
//we will get an error for the above program, because it is function-scoped
//function scope variables are useful for programmers

//problems with 'var' keyword
var greetings1 = "Hello";
if (true) {
  var greetings1 = "hi";
  console.log(greetings1);
}
console.log(greetings1);

//'let' keyword got advantage
let greetings2 = "I am outside";
if (true) {
  let greetings2 = "I am inside scope";
  console.log(greetings2);
}
console.log(greetings2);

//functions & 'var and let'
function sample() {
  var i = 0;

  for (var i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log("The value of i is " + i);
}

sample();

//using let
function otherSample() {
  let i = 0;

  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log("The value of i is " + i);
}
otherSample();

//const keyword
// const PI = 3.14;
// console.log(PI * 5)

// PI = 5;

let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 1
