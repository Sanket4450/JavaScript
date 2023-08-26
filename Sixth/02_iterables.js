// Iterables are iterable objects(like Arrays). It simply means looping over a sequence of elements.

// for..of statement loops through the elements of an iterable object.

// for..of loop to iterate over the elements of a string

const name = "Tony Stark";

for (let x of name) {
    console.log(x);
}
console.log(); // just for line-break

// for..of loop to iterate over the elements of an Array

const symbols = ["!", "@", "#", "$", "%"];

for (let x of symbols) {
    console.log(x);
}
console.log(); // just for line-break

// for..of loop to iterate over the elements of a Set

const games = new Set(["Cricket", "Soccer", "Golf", "Badminton"]);

for (let x of games) {
    console.log(x);
}
console.log(); // just for line-break

// for..of loop to iterate over the elements of a Map

const fruits = new Map([
    ["Apples", 100],
    ["Mangoes", 200],
    ["Bananas", 500]
]);

for (let x of fruits) {
    console.log(x);
}