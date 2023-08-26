// this keyword refers to an object.

// this is not a variable. It is a keyword. You cannot change the value of this.

// When used in an object method, this refers to the object.

const person1 = {
    fname: "Sanket",
    lname: "Talaviya",
    age: 21,
    fullName: function(){
        return this.fname + " " + this.lname;
    }
}

for (let a in person1){
    console.log(person1[a]);
}

// When used alone, this refers to the global object.

let a = this; // this will also refer in strict mode
console.log(a);

// In a function, the global object is the default binding for this.

myFunction();
function myFunction(){
    return this;
}

// when used in a function, in strict mode, this is undefined.

myFunction1();
function myFunction1(){
    "use strict"
    return this;
}

// In HTML event handlers, this refers to the HTML element that received the event

const car1 = {
    name: "Bugatti",
    model: "Veyron",
    price: 100000000,
    display: function(){
        return this;
    }
}

// call() and apply() methods are predefined JavaScript methods.