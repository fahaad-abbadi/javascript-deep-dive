//use strict inside a function

temp = 15;
console.log(temp);

function sample() {
    // inside the function only
    // this 'use strict' thing is applicable
    console.log("random line")
    'use strict'

    result = "Top";
    console.log(result);
}

sample();