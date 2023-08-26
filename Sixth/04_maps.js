/* A Map holds key - value pairs where the keys can be any datatype & it remembers the original insertion
order of the keys. */

// You can create a Map by passing an Array to the new Map() constructor

const cars = new Map([
    ["Mercedes", "black"],
    ["BMW", "blue"],
    ["Audi", "white"],
]);

// You can add elements to a Map with the set() method

// Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("Apple", 200);
fruits.set("Orange", 300);
fruits.set("Banana", 500);

// set() method can also be used to change existing Map values
fruits.set("Orange", 400);

// get() method gets the value of a key in a Map
console.log(fruits.get("Banana")); // gets & prints value of "Banana"

// get() method gets the value of a key in a Map
console.log(fruits.size);

// delete () method removes a Map element
fruits.delete("Apple");

// has() method returns true if a key exists in a Map
console.log(fruits.has("Banana"));
console.log(fruits.has("Apple"));

// Objects don't have size property whereas Maps do

console.log(); // just for line-break

// forEach() method calls a function for each key / value pair in a Map

const players = new Map([
    ["Virat", 18],
    ["Rohit", 45],
    ["Sachin", 10],
    ["Sehwag", null]
]);

players.forEach(function(value, key) {
    console.log(key); // prints only the keys of map
});
console.log(); // just for line-break

players.forEach(function(value, key) {
    console.log(value); // prints only the values of map
});
console.log(); // just for line-break

players.forEach(function(value, key) {
    console.log(key + " = " + value); // prints both keys as well as values of the map
});
console.log(); // just for line-break

// in forEach() method, first parameter is for values & second parameter is for keys in map

// entries() method returns an iterator object with the [key, values] in a Map

for (let x of players.entries()) { // we have to use entries() method like this
    console.log(x);
}