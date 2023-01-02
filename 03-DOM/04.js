// source: freecodecamp.org

//Traversing in DOM
//3 ways to traverse DOM
//upward, downward and sideways

//upward
// The parentElement is great for selecting one level upwards. 

const parent1 = document.getElementById('parent').lastElementChild
console.log(parent1)
const parent2 = document.getElementById('parent').children[3]
console.log(parent2)



const secondchild = document.getElementById('secondchild')
console.log(secondchild)
console.log(secondchild.parentNode)





console.log(secondchild.nextElementSibling)

console.log(secondchild.previousElementSibling)







//create element
const createEl = document.createElement('div')
const innerhtml = createEl.innerHTML = 'i am a frontend developer'


//append element
const parentEl = document.getElementById('parent')
parentEl.appendChild(createEl)
console.log(parentEl);




//insert before
const firstchildEl = document.getElementById('firstchild');
parentEl.insertBefore(createEl, firstchildEl)
console.log(parentEl);







//replace child
parentEl.replaceChild(createEl, firstchildEl);
console.log(parentEl)

//remove child
parentEl.removeChild(firstchildEl)
console.log(parentEl)

//prepend() inserts the data at the top of first child
//append() inserts at last


//parentElement
// const ele1 = document.querySelector("a");
// console.log(ele1.parentElement);

//closest
// const ele2 = document.querySelector(".heading");
// console.log(ele2.closest(".firstchild"));

//downward
// children
// const ele3 = document.querySelector(".downward");
// const child = ele3.children;

// console.log(child);

//siblings
//previousElementSibling, nextElementSibling
// const ele4 = document.querySelector(".sideways1");
// console.log(ele4.previousElementSibling);

// const ele5 = document.querySelector(".sideways2");
// console.log(ele5.nextElementSibling);