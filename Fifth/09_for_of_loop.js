/* for of statement loops through the values of an iterable object. It lets you loop over
iterable data structures such as Arrays, Strings, Maps, NodeLists, and more */

// For every iteration the value of the next property is assigned to the variable.

// Looping over an Array
const numbers = [18, 35, 20, 6, 11, 23];

for (let x of numbers) {
    console.log(x); // printing numbers[x] will be undefined (like for in loop)
}
console.log(); // just for line-break

const cars = ["Mercedes", "BMW", "Audi", "Bugatti", "Rolls Royce"];

for (let x of cars) {
    console.log(x);
}
console.log(); // just for line-break

// Looping over a String
const name = "Sanket";

for (let x of name) {
    console.log(x);
}
console.log(); // just for line-break

const org = "United Nations ";

for (let x of org) {
    console.log(x);
}