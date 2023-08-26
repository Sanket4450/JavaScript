// JavaScript Classes are templates for JavaScript Objects.

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
// example above creates a class named "Car".
// the class has two initial properties: "name" and "year".

// A JavaScript class is not an object. It is a template for JavaScript objects.

// When you have a class, you can use the class to create objects

const myCar1 = new Car("BMW", 2015);
const myCar2 = new Car("Audi", 2018);

// example above uses the Car class to create two Car objects.

console.log(myCar1.name + " " + myCar2.name);

// constructor method is called automatically when a new object is created.

// constructor method is a special method, It has to have the exact name "constructor"
// It is executed automatically when a new object is created used to initialize object properties

// Class methods are created with the same syntax as object methods.
// Always add a constructor() method, then add any number of methods.

class person {
    constructor(firstName, lastName, birthYear) {
        this.fname = firstName;
        this.lname = lastName;
        this.year = birthYear;
    }
    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

const person1 = new person("Sanket", "Talaviya", 2006);

console.log("My name is " + person1.fname + " " + person1.lname + " and I am " + person1.age() + " years old.");

// You can send parameters to Class methods

class _person {
    constructor(firstName, lastName, birthYear) {
        this.fname = firstName;
        this.lname = lastName;
        this.year = birthYear;
    }
    age(x) {
        return x - this.year;
    }
}
const date = new Date();
let year = date.getFullYear();

const person2 = new _person("Sanket", "Talaviya", 2006);

console.log("My name is " + person2.fname + " " + person2.lname + " and I am " + person2.age(year) + " years old.");