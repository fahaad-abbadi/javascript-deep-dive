//variables are like container
//the values are stored in the specific location in the main memory
var num1 = 7;
var num2 = 8;

var sum = num1 + num2;
var diff = num1 - num2;
var mul = num1 * num2;
var div = num1 / num2;

console.log(sum);
console.log(diff);
console.log(mul);
console.log(div);


//in java variables are of three types, 'let' 'var' 'const'
var greetings1 = "Hello!"
var greetings2 = " How are you doing?"

//we can add a string with string, it is called 'concatenation'
console.log(greetings1 + greetings2);

//if we add an integer & string, the integer is treated as string
//JS adds from left to right
console.log(num1 + greetings1)
console.log(num1 + num2 + greetings1)

console.log(greetings1 + num1 + num2)
