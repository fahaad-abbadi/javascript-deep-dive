//substring(v. imp)
let str = "Hello this is a big sentence, anyway"
console.log(str.substr(0, 8));

console.log(str.substr(5));

console.log(str.substr(-4));

//replace
let temp = "This is kidney hospital"
let ans = temp.replace("kidney", "cancer")

//replace doesn't change the old string, strings are immutable, replace() returns a new string

let sample1 = "Hello man!"
console.log(sample1.length)

//slice
console.log(sample1.slice(2, 5));
console.log(sample1.slice(5));

//slice with negative value
console.log(sample1.slice(-6))

//substring is kinda same
//but negative values are treated as zero
console.log(sample1.substr(2, 9));
console.log(sample1.substr(3))


//replace
let sample2 = "  how is the day?   "
let res = sample2.replace("is", "was")

//strings are immutable
//replace doesn't change the string 
//it returns a new value of string
//replace is case sensitive too

//uppercase to lowercase and vice versa
alert(sample1.toUpperCase());
alert(sample1.toLowerCase())

//to remove white spaces 
//use trim()
console.log(sample2.trim())

let sample3 = "    This is sample3 text     ";
console.log(sample3.trimStart());

console.log(sample3.trimEnd());

//extracting string characters
let sample4 = "Hello world";
console.log(sample4.charAt(4));

//split function, converts string to array
let sample5 = "how -are-you-bru-hh?"
sample5 = sample5.split("-");
console.log(sample5)

//indexOf
let sample6 = "This is planet earth";
sample6.indexOf("planet")