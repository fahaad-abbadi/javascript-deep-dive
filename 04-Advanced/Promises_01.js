// A promise is simply a placeholder for an asynchronous task which is yet to be completed. 
// When you define a promise object in your script, 
// instead of returning a value immediately, it returns a promise.

// You can define a promise in your JavaScript by calling the Promise class
//constructing an object like this:

const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is the eventual value the promise will return');
    }, 300);
});

console.log(myPromise1);

const myPromise2 = new Promise((resolve, reject) => {
    resolve('we did not keep any time, it directly displays');
});

console.log(myPromise2);

// Constructing an object is not the only way you can define a promise, though. 
// You can also use the built-in Promise API to achieve the same thing:

const anotherPromise = Promise.resolve("this is the eventual value the promise will return")

console.log(anotherPromise);



//promises can be rejected too
const badPromise1 = new Promise((resolve, reject) => {
    let a = false;
    return (a) ? resolve('a is found!') : reject('sorry, no a');
});

console.log(badPromise1);




const badPromise2 = new Promise((resolve, reject) => {
    let a = false;
    setTimeout(() => {
        return (a) ? resolve('a is found!') : reject('sorry, no a');
    }, 300);
});

console.log(badPromise2)