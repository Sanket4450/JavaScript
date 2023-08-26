// for in statement loops through the properties of an Object

const person = {
    firstName: "Sanket",
    lastName: "Talaviya",
    age: 17
}

// for in loop iterates over a person object
// Each iteration returns a key(x), value of the key is person[x]

for (let x in person) {
    console.log(x); // prints only keys of the object
}
console.log(); // just for line-break

for (let x in person) {
    console.log(person[x]); // prints only key-values of the object
}
console.log(); // just for line-break

for (let x in person) {
    console.log(x + ':', person[x]); // prints keys as well as values
}
console.log(); // just for line-break

// for in statement can also loop over the properties of an Array

const numbers = [12, 20, 8, 25, 10];

for (let x in numbers) {
    console.log(x); // prints only indexes of the array
}
console.log(); // just for line-break

for (let x in numbers) {
    console.log(numbers[x]); // prints all the values of array
}
console.log(); // just for line-break

const cars = ["BMW", "Mercedes", "Audi", "Bugatti"];

for (let x in cars) {
    console.log(x); // prints only indexes of the array
}
console.log(); // just for line-break

for (let x in cars) {
    console.log(cars[x]); // prints all the values of array
}
console.log(); // just for line-break

// Do not use for in over an Array if the index order is important.
// It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.

// forEach() method calls a function (a callback function) once for each array element.

mobiles = ["Apple", "Samsung", "OnePlus", "Vivo", "Oppo"];

mobiles.forEach(myFunction1);

function myFunction1(value, index, array) { // we've learnt about these three parameters before
    console.log(value);
}
console.log(); // just for line-break

mobiles.forEach(myFunction2);

function myFunction2(value) { // we can use only one parameter for printing values
    console.log(value);
}