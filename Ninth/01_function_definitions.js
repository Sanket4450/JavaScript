// JavaScript functions are defined with the function keyword.

function myFunction1() {  // function declaration
    console.log("I am a Function");
}  // this function returns nothing

// will be executed later, when they are invoked(called upon).

myFunction1(); // function call

// Since a function declaration is not an executable statement, it is not common to end it with a semicolon.

function myFunction2(x, y) { // function declaration with parameters
    let z = x * y;
    return z;  // this will return the value of z
}

let z = myFunction2(4, 7); // function call with arguments
console.log(z); // will print 28

// A JavaScript function can also be defined using an expression.
// A function expression can be stored in a variable

const abc = function(a, b, c) { // whole function is stored in abc variable
    return a + b - c;
}; // ends with a semicolon because it is a part of an executable statement.

// function above is actually an anonymous function (a function without a name).

// After a function expression has been stored in a variable, the variable can be used as a function

let xyz = abc(12, 5, 7); // function call with arguments
console.log(xyz); // will print 10

// Functions can also be defined with a built -in JavaScript function constructor called Function().

const myFunction3 = new Function("a, b", "return a * b"); // a & b are parameters here

let x = myFunction3(12, 5); // function call with arguments
console.log(x); // will print 60

// Hoisting applies to to function declarations also, They can be called before they are declared

console.log(myFunction4(7)); // function call before declaration

function myFunction4(x) {
    return x * x;
}
// Functions defined using an expression are not hoisted.

// A self - invoking expression is invoked(started) automatically, without being called.

(function myFunction5() {
    console.log("I am a self-invoking expression");
})(); // writing () for self-invoking & also whole function must be covered by paranthesis

// function above is actually an anonymous self - invoking function (function without name).

// functions can be used in expressions

function myFunction6(x, y) {
    return x + y;
}

let a = myFunction6(12, 7) * 4; // return value (12 + 7) * 4
console.log(a); // will print 76

// typeof operator in JavaScript returns "function" for functions.

console.log(typeof function(){});

// functions have both properties and methods.

// arguments.length property returns the number of arguments received when the function was invoked

function myFunction7(x, y, z) {
    return arguments.length;
}

let b = myFunction7(5, 8); // function call with 2 arguments
console.log(b); // will print 2

// toString() method returns the function as a string

function myFunction8(a, b) {
    return a * b;
}

let c = myFunction8.toString();
console.log(c);

// Arrow functions allows a short syntax for writing function expressions.

const pqr = (a, b) => a * b; // a & b are parameters here, a * b is the return statement

// Arrow functions are not hoisted.They must be defined before they are used.

console.log(pqr(4, 9)); // will print 36

// You can only omit the return keyword and the curly brackets if the function is a single statement.

const jkl = x => { return x * x };

console.log(jkl(14)); // will print 196