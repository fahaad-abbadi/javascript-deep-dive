//this inside function

function sample() {
    console.log(this);
}

sample();
//it prints window object

//when this is inside function 
//it prints global object