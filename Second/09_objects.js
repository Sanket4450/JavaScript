// In real life, a car is an object, It has properties like weight and color, and methods like start and stop

// Objects are variables too.But objects can contain many values.

// The values are written as name:value pairs(name and value separated by a colon).

// Create an object: It is a good practice to declare objects with const
const car = {type: "Bugatti", model: "Chiron", color: "blue"};

// Spaces and line breaks are not important. An object definition can span multiple lines

const person = {
    firstName: "Sanket",
    lastName: "Talaviya",
    age: 30,
    eyeColor: "blue",
    weight: 50,
    height: 165
}; // name: values pairs in JavaScript objects are called properties

// You can access object properties in two ways: objectName.propertyName or objectName["propertyName"]

console.log(person.firstName);
console.log(person["lastName"]);

/* Objects can also have methods which are actions that can be performed on objects. Methods are stored
in properties as function definitions. */

// A method is a function stored as a property.

const person1 = {
    fname: "Rohit",
    lname: "Sharma",
    age: 36,
    jersey: 45,
    fullName: function(){
        return this.fname + " " + this.lname;
    }  // this.fname means the fname property of this object.
}

let fullName = person1.fullName();
console.log(fullName);
console.log(person1.fullName());
console.log(person1.fullName);

// When a JavaScript variable is declared with the keyword "new", the variable is created as an object

