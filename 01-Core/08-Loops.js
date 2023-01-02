//for loop
// iteration
for (let i = 0; i < 9; i++) {
    console.log(i);
}

//for loop with break
for (let i = 1; i < 10; i += 2) {
    if (i === 7) {
        break;
    }
    console.log(i);
}


//for in loop
const array = [12, 32, 73];

for (const i in array) {
    console.log(i);
}

//'for in' and objects
const capitals = {
    a: "Athens",
    b: "Belgrade",
    c: "Cairo"
};

for (let key in capitals) {
    console.log(key + ": " + capitals[key]);
}

//'for of'
const arr = ["Fred", "Tom", "Bob"];

for (let i of arr) {
    console.log(i);
}

//used in maps
const m = new Map();
m.set(1, "black");
m.set(2, "red");

console.log(m.get(1));

for (let n of m) {
    console.log(n);
}


//usage in sets
const s = new Set();
s.add(1);
s.add("red");

for (let n of s) {
    console.log(n);
}

//while loop
let i = 30;

while (i >= 0) {
    console.log(i);
    i -= 5;
}



//do-while loop
let j = 14;

do {
    console.log(j);
    j--;
} while (j < 13);


j = 14;

while (j < 13) {
    console.log(j)
}


//for each
//calls each element in array
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)


function myFunction(item, index, arr) {
    arr[index] = item * 10;
}

console.log(numbers)




const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

let text1 = "";
fruits.forEach(function(value, key) {
    text1 += key + ' = ' + value + ' ';
})
console.log(text1)





const letters = new Set(["a", "b", "c"]);

// List all Elements
let text2 = "";
letters.forEach(function(value) {
    text2 += value;
})

console.log(text2)