// JavaScript counts positions from zero, 0 is the first position in a string, 1 is the second, ...

// indexOf() method returns the index(position) the first occurrence of a string in a string

let text1 = "national stock exchange for national people";
let index1 = text1.indexOf("national");

console.log(index1);

// lastIndexOf() method returns the index of the last occurrence of a specified text in a string

let index2 = text1.lastIndexOf("national");

console.log(index2);

// Both indexOf(), and lastIndexOf() return -1 if the text is not found

let text2 = "Virat Kohli";
let index3 = text2.indexOf("Chiku");

console.log(index3);

// Both methods accept a second parameter as the starting position for the search

let text3 = "Indian Premier League and Premier League";
let index4 = text3.indexOf("Premier",5);

console.log(index4);

// lastIndexOf() methods searches backwards(from the end to the beginning)

let index5 = text3.lastIndexOf("Premier", 27);

console.log(index5);

// Both indexOf(), and lastIndexOf() return -1 if the parameter crosses the boundary

// search() method searches a string for a string(or a regular expression) and returns the position of the match

let index6 = text3.search("Premier");

console.log(index6);

// The two methods, indexOf() and search(), are equal ?
// indexOf() method cannot take powerful search values(regular expressions).

// includes() method returns true if a string contains a specified value, Otherwise it returns false.

let text4 = "If you think you are bad, I am your dad";
let index7 = text4.includes("dad");

console.log(index7);

let index8 = text4.includes("daddy");

console.log(index8);

// startsWith() method returns true if a string begins with a specified value, Otherwise it returns false

let text5 = "Why this Kolaveri Kolaveri Kolaveri Di";
let index9 = text5.startsWith("Why");

console.log(index9);

let index10 = text5.startsWith("Kolaveri");

console.log(index10);

// A start position for the search can be specified

let index11 = text5.startsWith("Kolaveri", 1);

console.log(index11);

let index12 = text5.startsWith("Kolaveri", 9);

console.log(index12);

// endsWith() method returns true if a string ends with a specified value, Otherwise it returns false

let index13 = text5.endsWith("Di");

console.log(index13);

let index14 = text5.endsWith("kolaveri");

console.log(index14);

// Check if the 11 first characters of a string ends with "world"

let index15 = text5.endsWith("this", 8);

console.log(index15);

let index16 = text5.endsWith("this", 6);

console.log(index16);