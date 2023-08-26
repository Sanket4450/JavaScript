// A JavaScript Set is a collection of unique values, A Set can hold any value of any data type.

// Each value can only occur once in a Set.

// Pass an Array to the new Set() constructor

// Create a Set
const set1 = new Set(["Sanket", "Shyam", "Vaibhav"]);

console.log(set1.size);

// Create a Set and add literal values

// Create a Set
const set2 = new Set();

// Add Values to the Set
set2.add("A");
set2.add("B");
set2.add("C");
set2.add("D");

console.log(set2.size);

// Create a Set and add variables

// Create Variables
const a = "India";
const b = "Australia";
const c = "England";
const d = "New Zealand";
const e = "South Africa";
const f = "West Indies";
const g = "Afghanistan";

// Create a Set
const set3 = new Set();

// Add Variables to the Set
set3.add(a);
set3.add(b);
set3.add(c);
set3.add(d);
set3.add(e);
set3.add(f);

// If you add equal elements, only the first will be saved
set3.add(g);
set3.add(g);
set3.add(g);
set3.add(g);

console.log(set3.size);

// forEach() method invokes a function for each Set element

// Create a Set
const set4 = new Set([12, 25e4, "Sanket", "SK", false, []]);

// List all entries
set4.forEach(function(india){
    console.log(india); // At these both places, value can be whatever but must be the same
})

// values() method returns an Iterator object containing all the values in a Set

// Create a Set
const set5 = new Set(["Rohit", 45, "Virat", 18]);

// List all Elements
for (let x of set5.values()) {
    console.log(x);
}

// A Set has no keys, keys() returns the same as values(), This makes Sets compatible with Maps.

// entries() returns[value, value] pairs instead of[key, value] pairs.

// For a Set, typeof returns object

console.log(typeof new Set());
console.log(typeof set5);

// For a Set, instanceof Set returns true

console.log(set5 instanceof Set);