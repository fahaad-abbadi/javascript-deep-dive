//problems with callback
//Inversion of Control problem
// When using callbacks, callback hell isn’t your biggest worry, 
// it’s losing control of your control flow to 3rd party libraries.

// The JavaScript world now has a huge number of packages. npm itself has 300,000 publicly registered modules
//  and not all of them are as well maintained as others.

const goodGardener = (cb) => { cb('done') };
const badGardener = (cb) => { /*do some stuff here*/ };


goodGardener((res) => console.log(res)) // ‘done!’
badGardener((res) => console.log(res));

// In badGardener the passed callback argument is never invoked, nor is any error thrown or otherwise reported. 
// In the mean time, the surrounding block that badGardener was called from has completed
//  and given you no indication of failure. 
// When you invoke a 3rd party callback function, you implicitly trust it to always invoke the passed callback method or throw an exception.

// Callback hell? Forget looking at hard to read code, you’ve just lost your entire control flow. 
// No subsequent callback will get invoked. 
// Your nodejs request just left your customer hanging. 
// Now imagine having to dig through your stack trying to find that one little library that’s causing requests to silently fail.

//source: medium.com/@joey_9999/callbacks-arent-just-ugly-they-re-dangerous-392683f49e1c