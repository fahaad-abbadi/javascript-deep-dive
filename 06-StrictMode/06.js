'use strict';

// throws an error
// variables
temp = 'this is a string which is inside variable'

//objects
device = {
    name: "keyboard",
    price: 500
}

// octal syntax is not allowed
const b = 010;


// we can't name our variables 'arguments' & 'eval'
// const arguments = 19;
// var eval = 'this is some text'

//can't use reserved keywords like 
// 'static', 'private', 'protected', 'let', 'package', 'interface', 'implements'
// 'public', 'package'

// duplicating parameter
function bottleOpener(a, a) {
    console.log("this is " + a)
}

bottleOpener()

//getter-only property
let classroom = {
    get chair() {
        return 5;
    }
};

classroom.chair = true;

// non-writable property
let gadget = {};

Object.defineProperty(gadget, 'wireless', {
    name: "bot",
    writable: false
});

//we are assigning non-writable property
gadget.wireless = 9; // throws an error

//non-extensible object
let station = {};
Object.preventExtensions(station);

// Assignment to a new property on a non-extensible object
station.newValue = 'secunderabad'; // throws an error