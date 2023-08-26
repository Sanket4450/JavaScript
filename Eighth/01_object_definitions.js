// In JavaScript, objects are king.If you understand objects, you understand JavaScript.

/* In JavaScript, almost "everything" is an object. Boolean, Numbers, Strings (with new keyword),
Dates, Maths, Arrays, Objects, Functions, Regular Expressions all values (except primitives) are objects. */

// Object values are written as name : value pairs(name and value separated by a colon).

let person1 = {firstName: "Rohit", lastName: "Sharma", age: 36}; // object declaration with let

// It is a common practice to declare objects with the const keyword.

const person2 = {firstName: "Virat", lastName: "Kohli", age: 34}; // object declaration with const

// The named values, in JavaScript objects, are called properties (ex. firstName, lastName, age).

// Methods are actions that can be performed on objects.

// Object properties can be both primitive values, other objects, and functions.

const person3 = {
    firstName: "M.S.",
    lastName: "Dhoni",
    age: 39,
    fullName: function() {  // object method or function
        return this.firstName + " " + this.lastName;
    }
}

// create empty object then add properties to it

const person4 = {};
person4.firstName = "Hardik";
person4.lastName = "Pandya";
person4.age = 29;

// create empty object with new Object() then add properties to it

const person5 = new Object();
person5.firstName = "Jasprit";
person5.lastName = "Bumrah";
person5.age = 29;  // this isn't an optimal way to use objects, object literal method is better

// Objects are mutable: They are addressed by reference, not by value.

const _person = {
    firstName: "Sachin",
    lastName: "Tendulkar",
    age: 50
}

const a = _person; // will not create a copy of _person.

// Both a and _person are the same object, Any changes to a will also change _person

a.age = 26; // will change both a.age & _person.age