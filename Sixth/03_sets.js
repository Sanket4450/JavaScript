// A JavaScript Set is a collection of unique values, Each value can only occur once in a Set.

// Pass an Array to the new Set() constructor

const mySet1 = new Set(["a", "b", "c"]);

// size method returns the number of elements in a Set

console.log(mySet1.size);

// Create a Set and add values

// Create a Set
const mySet2 = new Set();

// Add Values to the Set
mySet2.add("a");
mySet2.add("b");
mySet2.add("c");
mySet2.add("d");

console.log(mySet2.size);

// Create a Set and add variables

const mySet3 = new Set();

const a = "ABC";
const b = "DEF";
const c = "GHI";
const d = "JKL";
const e = "MNO";

mySet3.add(a);
mySet3.add(b);
mySet3.add(c);
mySet3.add(d);
mySet3.add(e);

console.log(mySet3.size);

// If you add equal elements, only the first will be saved

const mySet4 = new Set();

const f = "ABC";
const g = "123";
const h = 15;

mySet4.add(f);
mySet4.add(g);
mySet4.add(g);
mySet4.add(g);
mySet4.add(g);
mySet4.add(h);
mySet4.delete(h); // removes h from the Set

console.log(mySet4.has(g)); // returns true if g exists in the Set
console.log(mySet4.has("123")); // returns true if "123" exists in the Set
console.log(mySet4.has(h)); // returns true if h exists in the Set otherwise returns false

console.log(mySet4.size);

console.log(); // just for line-break (new line)

// forEach() method invokes(calls) a function for each Set element

const cars = new Set(["Audi", "Mercedes", "BMW", "Ferrari"]);

cars.forEach(function(value) {
    console.log(value);
});
console.log(); // just for line-break

// we can also use forEach() method like this...
cars.forEach(myFunction1);

function myFunction1(value) {
    console.log(value);
}
console.log(); // just for line-break

// values() method returns a new iterator object containing all the values in a Set

for (let x of cars.values()) { // we have to use values() method like this
    console.log(x);
}