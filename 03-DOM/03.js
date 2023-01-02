//event listeners
//change of state in an object is an event

const ele = document.querySelector("a");

ele.addEventListner("event", function() {
    ele.style.backgroundColor = "blue";
});

//one of the event is 'click'