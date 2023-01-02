//objects in JavaScript
//object oriented programming is popular programming paradigm

//it makes heavy usage of creating objects

//OOP facilitates the understanding of a program by the clear separation of concerns and responsibilities

//entities are coded as objects
//each entity has given set of properties(information) and methods(actions)

//very useful in large scale projects
//it facilitates modularity and organization

const player1 = {
    name: "Ali",
    country: "US",
    jump: () => console.log("Jump1"),
    kick: () => console.log("Kick1")
}

const player2 = {
    name: "Mango",
    country: "Canada",
    sayPhrase: () => console.log("Jump2"),
    fly: () => console.log("Kick2")
}

const gadget1 = {
    name: "bot1",
    type: "wired",
    sayPhrase: () => console.log("I am bot"),
    move: () => console.log("I move ")
}
const gadget2 = {
    name: "bot2",
    type: "IR",
    sayPhrase: () => console.log("I am bot2 bruhhh"),
    move: () => console.log("I move better, also didnt ask")
}

console.log(player1.name)
console.log(player2.country)

console.log(gadget2.type)
gadget1.sayPhrase()
player2.fly()

//now imagine this code by removing the objects 
//if we remove
//we should make strings for each and every gadget
//code readability gets difficult

//the above code is kinda okay
//but it doens't scale well 
//imagine hundereds or so many characters

//to solve this, we use classes
