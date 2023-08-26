// A JavaScript function is a block of code designed to perform a particular task.

// A JavaScript function is executed when "something" invokes it(calls it).

// A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses().

// The parentheses may include parameter names separated by commas: (parameter1, parameter2, ...)

/* Function parameters are listed inside the parentheses() in the function definition. Function arguments are
the values received by the function when it is invoked. Inside the function, the arguments(the parameters)
behave as local variables. */

function myFunction(a, b) {
    // Function returns the product of a and b
    return a * b;
}

// Function is called, the return value will end up in x
let a = myFunction(4, 3);

console.log(a);

// Another function to convert fahreheit to celsius
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

// we can call function like this & we will get the return value
console.log(toCelsius(98.6));

// Accessing a function with incorrect parameters can return an incorrect answer
console.log(toCelsius());

// Accessing a function without() returns the function and not the function result

console.log(toCelsius);

// Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.

console.log("The Temperature is " + toCelsius(110) + " °C");

// Variables declared within a JavaScript function, become LOCAL to the function, can only be accessed from within the function.

// code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
}

// code here can NOT use carName