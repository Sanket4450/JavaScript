// JavaScript methods are actions that can be performed on objects.

// A JavaScript method is a property containing a function definition, They are stored as object properties.

const person = {
    firstName: "Sanket",
    lastName: "Talaviya",
    age: 17,
    fullName: function() {
        return this.firstName + " " + this.lastName; // In an object method, this refers to the object.
    }  // this is not a variable. It is a keyword. You cannot change the value of this.
}

// You access an object method with the following syntax: objectName.methodName()

let fullName = person.fullName();
console.log(fullName);

// If you access the fullName property, without(), it will return the function definition

fullName = person.fullName;
console.log(fullName);