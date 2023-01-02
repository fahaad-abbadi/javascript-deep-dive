let data1 = {
    state: 'Telangana',
    capital: 'Hyderabad',
}

let data2 = {
    state: 'Tamil Nadu',
    capital: 'Chennai'
}


// .call(valueForThis, parameter1, parameter2, ....)

// functionExpression.call(Object, parameter1, paramter2, ...)



let location = function(country, continent) {
    console.log(this.state + ", " + this.capital + " from " + country + " , " + continent)
}

location.call(data1, "India", "Asia");

location.apply(data2, ["India", "Asia"]);


// //bind method
let rambo = location.bind(data2, "India", "Asia");
console.log(rambo);

rambo();