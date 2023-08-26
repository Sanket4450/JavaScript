// With the call() method, you can write a method that can be used on different objects.

// In JavaScript all functions are object methods.

// If a function is not a method of a JavaScript object, it is a function of the global object.

const _person = {
    firstName: "Cristiano",
    lastName: "Ronaldo",
    fullName: function() {
        return this.firstName + " " + this.lastName; // this refers to the person1 object.
    }  // this is not a variable. It is a keyword. You cannot change the value of this.
}
console.log(_person.fullName());

console.log(); // for a line-break

/* call() method is a predefined JavaScript method. It can be used to invoke (call) a method with
an owner object as an argument (parameter). */

// With call(), an object can use a method belonging to another object.

const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName: "Elon",
    lastName: "Musk"
}
const person2 = {
    firstName: "Bernard",
    lastName: "Arnault"
}
const person3 = {
    firstName: "Jeff",
    lastName: "Bezos"
}

console.log(person.fullName.call(person1)); // refers to the person1 object
console.log(person.fullName.call(person2)); // refers to the person2 object
console.log(person.fullName.call(person3)); // refers to the person3 object

console.log(); // just for line-break (new line)

// call() method can accept arguments

const $person = {
    fullName: function(city, country) { // method with parameters
        return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    }
}

console.log($person.fullName.call(person1, "Los Angeles", "United States")); // call with arguments
console.log($person.fullName.call(person2, "Paris", "France")); // call with arguments
console.log($person.fullName.call(person3, "New York", "United States")); // call with arguments

console.log(); // just for line-break (new line)

// above examples are of object methods we wanted to use for another object

// but here, is an example of global function we want to use for objects
let email = function () {
    return this.firstName.toLowerCase() + this.lastName.toLowerCase() + "01@gmail.com";
}

const name1 = {
    firstName: "Sanket",
    lastName: "Talaviya"
}
const name2 = {
    firstName: "Harshil",
    lastName: "Ribadiya"
}
const name3 = {
    firstName: "Manav",
    lastName: "Amrutiya"
}

console.log(email.call(name1));
console.log(email.call(name2));
console.log(email.call(name3));

console.log(); // just for line-break (new line)

// function with parameters
let id = function (city, country) {
    return this.firstName + " " + this.lastName + " from " + city + ", " + country;
}

console.log(id.call(name1, "Surat", "India"));
// first parameter will always be the argument for an object, later arguments are the function parameters

console.log(id.call(name2, "London", "UK"));

console.log(id.apply(name3, ["New York", "USA"])); // apply method
// the only difference between call & apply method is that apply method take all arguments inside an array