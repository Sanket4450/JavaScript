// JavaScript strings are for storing and manipulating text.

// A JavaScript string is zero or more characters written inside quotes.

let str1 = "Hello World!";
console.log(str1);  // printing string

// strings can be written in single or double quotes

let str2 = "Sanket Talaviya"; // double quotes
let str3 = 'Sanket Talaviya'; // single quotes

console.log(str2);
console.log(str3);

// You can use quotes inside a string, as long as they don't match the quotes surrounding the string

let str4 = "It's alright";
let str5 = "My name is 'Sanket'"; // single quotes inside double quotes
let str6 = 'My name is "Sanket"'; // double quotes inside single quotes
// let str7 = "My name is "Sanket""; this isn't valid

console.log(str4);
console.log(str5);
console.log(str6);

// To find the length of a string, use the built -in length property

let text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text1.length;

console.log(length);  // printing the length
console.log(text1.length); // printing the length

// backslash escape character:

console.log("Hello, Aliens! I am from \"Earth\""); // "Earth"
console.log("Hello, Aliens! I am from \'Earth\'"); // 'Earth'
console.log("Hello, Aliens! I am from \\Earth\\"); // \Earth\

console.log("My name is 'Rohit Sharma' \n"); // \n
console.log("\tMy name is 'Virat Kohli'\n"); // \t
console.log("My name is\f'M.S. \bDhoni'"); // \f \b

// break up a code line within a text string with a single backslash

console.log("Hello \
World!");

// A safer way to break up a string, is to use string addition

console.log("Hello " +
"World!");

// strings can also be defined as objects with the keyword new

let a = "Hello World!"; // this is a string
let b = new String("Hello World!"); // this is an object

// Comparing two JavaScript objects always returns false.