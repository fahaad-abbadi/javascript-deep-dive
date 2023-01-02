//DOM Manipulation
const title1 = document.querySelector('#main-heading1');
title1.style.color = 'red';
console.log(title1);

const title2 = document.querySelector('#main-heading2');
title2.style.color = 'green';
console.log(title2);


//font-size
const listItems = document.querySelectorAll('.list-items');

for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '5rem';
}


//creating elements
const ul = document.querySelector('ul');
const li = document.createElement('li');


//Adding elements
//adds a <li> tag
ul.append(li);


//modifying texts
li.innerText = 'a blah is a blah which was the blah but was never the blah';


const firstListItem1 = document.querySelector('.list-items');

console.log(firstListItem1.innerText);

const firstListItem2 = document.querySelector('.list-items');

console.log(firstListItem2.textContent);
console.log(firstListItem2.innerHTML);