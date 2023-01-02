//why use callbacks even?
function showArticle(id) {

    if (id > 0) {
        callbackSuccess("This is a callback function", "kichidi khatta");
    } else {
        callbackError("Error on data recovery.");
    }

}

var callbackSuccess = function(title, description) {
    console.log(title);
    console.log("This is " + description);
}

var callbackError = function(error) {
    console.log(error);
}

showArticle(2);


//using callbacks
function showArticle(id) {
    if (id > 0) {
        callbackSuccess("This is a callback function", "It is very utilized.");
    } else {
        callbackError("Error on data recovery.");
    }

}

var callbackSuccess = function(title, description) {
    console.log(title);
    console.log(description);
}

var callbackError = function(error) {
    console.log(error);
}

showArticle(1);

//in this example there is no special usage
//callbacks are extended/updated version of normal function calls
//can be used for asynchronous stuff
//during events in dom
//in nodejs, you gotta fetch api, files, network access, deal with servers etc etc
//those things take lotta time
//in array methods like .map() .filter() .reduce()
//if we donno how much time a function takes then we use callback
//in predefined stuff