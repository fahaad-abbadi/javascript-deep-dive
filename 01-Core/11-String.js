//strings are primitive values, created from literals

let greetings1 = "Hello"

console.log(greetings1)
let greetings2 = 'But who asked?'

console.log(greetings1.length)

//string as objects
let str1 = new String("Hello world!")
let str2 = "Hello world!"
let str3 = "Hello world!"

if (str1 === str2) {
    console.log(true)
} else {
    console.log(false)
}

//arrays are mutable, but strings ain't mutable
let arr = ['b', 'r', 'u', 'h']
let str = "bruh"

arr[2] = 'o';
console.log(arr)

str[1] = 'c';
console.log(str)