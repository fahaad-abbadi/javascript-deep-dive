//DOM Manipulation

//DOM Tree
//https: //fritscher.ch/dom-css/;

//GetElementById()
//gives the data present in the id
const para1 = document.getElementById("main-heading1");
console.log(para1)



const para2 = document.getElementById("main-heading2");
console.log(para2);

//GetElementByClassName()
const listItem = document.getElementsByClassName('list-items');
console.log(listItem);

//getElementsByTagName()
const sample_tag = document.getElementsByTagName('li');
console.log(sample_tag)

//querySelector()
// The document.querySelector() method returns the first element 
// that matches the passed selector. 
// Now here, we can pass classname, id, and tagname.
// When selecting using a tag, simply select directly. For example ("p")
const container1 = document.querySelector('div');
console.log(container1)

const heading = document.querySelector('h1');
console.log(heading)

//querySelectorAll()
const container2 = document.querySelectorAll('div');
console.log(container2);
