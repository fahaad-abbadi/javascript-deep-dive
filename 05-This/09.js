'use strict'

this.name = 'phone';

function wifi() {
    console.log(this);
}

//here, the output will be undefined
wifi();


//using 'call()' method
// this.company = 'Samsung';

// function sample() {
//     console.log(this.company);
// }

// //here, the output is 'Samsung'
// sample.call(this);