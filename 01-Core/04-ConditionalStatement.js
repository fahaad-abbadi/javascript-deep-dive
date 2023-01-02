//if(condition is true)
//else(condition is false)

//list of falsy values:
// false
// 0 
// "", '', `` (empty string)
// null
// undefined, etc


let age = 18;

if (age >= 18) {
    console.log("Adult")
} else {
    console.log("Child")
}


//for testing multiple conditions we use 'else if'
const height = 83;

if (height < 170) {
    console.log("Average height");
} else if (height >= 171 && height <= 180) {
    console.log("Good height");
} else {
    console.log("Tall boy");
}


//writing 'else if' so many times looks messedup
let subject = "science";

if (subject === "geography") {
    console.log("you have chosen geography");
} else if (subject === "calculas") {
    console.log("you have chosen calculus");
} else if (subject === "algebra") {
    console.log("you have chosen algebra");
} else if (subject === "social") {
    console.log("you have chosen social");
} else if (subject === "chemistry") {
    console.log("you have chosen chemistry");
} else {
    console.log("please choose any subject");
}



//to make it more simpler we can use 'switch statements
subject = "science";

switch (subject) {
    case "geography":
        console.log("you have chosen geography");
        break;
    case "calculas":
        console.log("you have chosen calculas");
        break;
    case "algebra":
        console.log("you have chosen algebra");
        break;
    case "social":
        console.log("you have chosen social");
        break;
    case "chemistry":
        console.log("you have chosen chemistry");
        break;
    default:
        console.log("Please choose any subject");
        break;
}




//using && operator in if-else
const hasLicence = false;
const hasBike = true;

if (hasLicence && hasBike) {
    console.log("Legal");
} else {
    console.log("Illegal");
}


//other example
const given_age = 23;

if (given_age >= 18 && given_age <= 24) {
    console.log('Young adult')
} else {
    console.log('nope')
}


// OR operator (||)
const friendIsPaying = false;
const burger = false;

if (friendIsPaying || burger) {
    console.log("Lets go!");
} else {
    console.log("I cannot come, kaama hai");
}

var trip = true;
//NOT(!) operator
if (!trip) {
    console.log("lets goooo!!!")
}








//teranary operator
const citizen_age = 28;
const citizen = citizen_age >= 18 ? "Can vote" : "Cannot vote";
console.log(citizen);