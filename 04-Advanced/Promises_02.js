//When the promise finally returns a value 
//you will typically want to do something with that return value

// For example,
//if you were making a api call, you might want to access the value and display it on the page for the user.

// You can define two callback functions which you want to get called when a promise is either fulfilled or rejected.
// These functions are defined inside a nested then() method:

const anotherPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is the eventual value the promise will return');
    }, 300);
});

anotherPromise
    .then(fulfillFn, rejectFn)
    .then(fulfilFn, rejectFn)
    .then(value => { console.log(value) });

// Always keep in mind that a then() method must take both the fulfillment hander and a rejection handler. 
// This way, the first is called if the promise is fulfilled 
// and the second is called if the promise is rejected with an error.

// The catch () method will always get called whenever an error is encountered

const myPromise = new Promise((resolve, reject) => {
    let a = false;
    setTimeout(() => {
        return (a) ? resolve('a is found!') : reject('sorry, no a');
    }, 300);
});

myPromise
    .then(value => { console.log(value) })
    .catch(err => { console.log(err) });