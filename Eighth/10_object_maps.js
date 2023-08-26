// A Map holds key - value pairs where the keys can be any datatype.

// A Map remembers the original insertion order of the keys.

// You can create a Map by passing an Array to the new Map() constructor

// Create a Map
const fruits = new Map([
    ["Apple", "Red"],
    ["Banana", "Yellow"],
    ["Orange", "Orange"],
]);

// You can add elements to a Map with the set() method

// Create a Map
const players = new Map();

// Set Map Values
players.set("Rohit", 45);
players.set("Virat", 18);
players.set("Dhoni", 10);

// set() method can also be used to change existing Map values

players.set("Dhoni", 7);

// get() method gets the value of a key in a Map

console.log(players.get("Virat"));

// size property returns the number of elements in a Map

console.log(players.size);

// delete () method removes a Map element

players.delete("Rohit");

console.log(players.size);

// clear() method removes all the elements from a Map

players.clear();

console.log(players.size);

// has() method returns true if a key exists in a Map

const countries = new Map([
    ["India", "Delhi"],
    ["Australia", "Sydney"],
    ["England", "London"],
    ["USA", "New York"],
]);

console.log(countries.has("India"));

// try this
countries.delete("England");
console.log(countries.has("England"));

// typeof returns object

console.log(typeof new Map());
console.log(typeof countries);

// instanceof Map returns true

console.log(countries instanceof Map);

console.log(); // for a line-break (a new line)

// forEach() method invokes a callback for each key / value pair in a Map

countries.forEach(function(value, key) { // (value, key) should not be like (key, value)
    console.log(key + " : " + value);
});
console.log(); // for a line-break

// entries() method returns an iterator object with the[key, values] in a Map

for (let x of countries.entries()) {
    console.log(x);
}
console.log(); // for a line-break

// keys() method returns an iterator object with the keys in a Map

for (let x of countries.keys()) { // key-values will not be printed
    console.log(x);
}
console.log(); // for a line-break

// values() method returns an iterator object with the values in a Map

for (let x of countries.values()) {
    console.log(x);
}
console.log(); // for a line-break

// You can use the values() method to sum the values in a Map

// Create a Map
const mobiles = new Map([
    ["Apple", 100],
    ["Samsung", 300],
    ["OnePlus", 500],
    ["Vivo", 1000],
]);

let total = 0;

for (let x of mobiles.values()) {
    total += x;  // all values are added to total (100 + 300 + 500 + 1000)
}
console.log(total); // prints the sum of map values
console.log(); // for a line-break

// Being able to use objects as keys is an important Map feature.

// Create Objects
const cricket = {name: "Cricket"};
const soccer = {name: "Soccer"};
const golf = {name: "Golf"};

// Create a Map
const sports = new Map();

// Add new Elements to the Map
sports.set(cricket, 100); // here, cricket is an object, not a string
sports.set(soccer, 200);
sports.set(golf, 300);

console.log(sports.get(soccer)); // soccer is an object, not a "string"