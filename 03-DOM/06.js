//event listener syntax
// const ele = document.querySelector("a");

// ele.addEventListner("event", function() {
//     // callback function
// });

const navbar = document.querySelector("nav");
navbar.addEventListener('click', function() {
    navbar.style.backgroundColor = "green"
});

//traversing dom upward
const ele1 = document.querySelector("a");
console.log(ele1.parentElement);

//downward
const ele2 = document.querySelector("div");
const child = ele2.children;
console.log(child)

//previousElementSibling
const ele3 = document.querySelector(".child-2");
console.log(ele3.previousElementSibling);

//nextElementSibling
console.log(ele3.nextElementSibling);