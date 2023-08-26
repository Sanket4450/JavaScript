// Scope determines the accessibility(visibility) of variables.

// JavaScript has 3 types of scope:

// Block scope
// Function scope
// Global scope

// let & const have block scope, variables declared inside a block {} cannot be accessed outside the block

{
    let x = 12;
    console.log(x);
}
// console.log(x); cannot be accessed here

// Variables declared with the var keyword can NOT have block scope.

{
    var x = 10;
    console.log(x);
}
console.log(x); // can be accessed here

// Variables declared within a JavaScript function, become LOCAL to the function.

// Local variables have Function Scope, They can only be accessed from within the function.

function myFunction(){
    let y = 15;
    // y can be accessed here
}
// y cannot be accessed here

// Variables defined inside a function are not accessible(visible) from outside the function.

function myFunction(){
    let a = 5;
} // a cannot be accessed here
function myFunction() {
    var a = 5;
} // a cannot be accessed here
function myFunction() {
    const a = 5;
} // a cannot be accessed here

// A variable declared outside a function, becomes GLOBAL.

let b = 28;
console.log(b);
// b can be used here

function myFunction(){
    console.log(b);
    // b can also be used here
}
myFunction();

// In JavaScript, objects and functions are also variables.