// code inside a function will execute when "something" invokes (calls) it.

// It is common to use the term "call a function" instead of "invoke a function".

// you can define functions as object methods.

const myObject = {
    firstName: "Sanket",
    lastName: "Talaviya",
    fullName: function() {  // fullName method is a function belongs to the object
        return this.firstName + " " + this.lastName;
    }
}
console.log(myObject.fullName());

// If a function invocation is preceded with the new keyword, it is a constructor invocation.

// This is a function constructor
function myFunction1(argument1, argument2) {
    this.firstName = argument1;
    this.lastName = argument2;
}

// This creates a new object
const myObject1 = new myFunction1("Virat", "Kohli");

console.log(myObject1.firstName);
console.log(myObject1.lastName);