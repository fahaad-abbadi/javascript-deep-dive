//Reflection in JS

//we see ourselves in mirror, that's reflection
//we see things that we couldn't see without it


//similarly, an object can look at itself, listing and changing its properties and methods
//e.g.

// In computer programming, reflection is the ability of a program to manipulate
// variables, properties, and methods of objects at runtime.

var Phone = {
    company: "Default",
    model: "Y23",

    getProcessorName: function() {
        return this.company + " " + this.model;
    }
}

var gadget = {
    company: "Axiole",
    model: "IR28X"
}


//__proto__ is  a way to inherit properties from an object in JS
gadget.__proto__ = Phone;

//Reflection : Iterate over the members of an object
for (var prop in gadget) {
    console.log(prop + " : " + gadget[prop]);
}

//There's Reflect API, which has got many methods
//you can refer : https://www.javascripttutorial.net/es6/javascript-reflection/