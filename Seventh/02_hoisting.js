// a variable can be used before it has been declared.

x = 5;
console.log(x); // not need to declare but must be initialized
var x; // possible for var only

// Using a let variable before it is declared will result in a ReferenceError.

y = 10;
console.log(y);
// let y; this will give reference error

// const must be initalized while declaring

// JavaScript only hoists declarations, not initializations.

let a;
console.log(a); // this will be undefined
a = 10;

console.log(b); // will be undefined
var b = 12;