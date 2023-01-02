//the below thing array
let myArray1 = [12, 15, 78, 14]
let myArray2 = [404, "Hello"]
let myArray3 = ["bye", "who asked", "bin chillin"]


console.log(myArray1[0])






















console.log(myArray3[0])


for (let i = 0; i < 3; i++) {
    console.log(i + "th element is " + myArray3[i]);
}























//arrays can have functions, objects and arrays too
const sample = [{
        'plant': 'Jasmine'
    },
    function add() {
        console.log(5 + 2);
    },
    [34, 56, 78]
]

//adding elements to an array
//array push
let myArray = [3, 4];
let i = 1;

do {
    myArray.push(i);
    i++;
} while (i < 10);

console.log(myArray);

//array unshift
//adds from the front
let games = ['cricket', 'football']
games.unshift('basketball')
console.log(games)

//to remove an element from last use pop()
games.pop();
//to remove it from front use shift()
games.shift();

//similarly array has more methods, refer google

//destructuring objects
const arr = ["item1", "item2", "item3"]
    // let a = arr[0];
    // let b = arr[1];
    // let c = arr[2];

// console.log(a + " " + b + " " + c);

let [x, y, z] = arr;
x = "other_item"
console.log(x + " " + y + " " + z);
//now keep adding and removing the items from 'arr' and check the results

//array slice
console.log(x.slice(3));