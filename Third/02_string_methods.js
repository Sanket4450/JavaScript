// All string methods return a new string. They don't modify the original string.

// Strings are immutable: Strings cannot be changed, only replaced.

// length property returns the length of a string

let text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text1.length;

console.log(length);
console.log(text1.length); // direct, without accessing the variable

// 3 methods for extracting a part of a string

// slice() extracts a part of a string and returns the extracted part in a new string.
// method takes 2 parameters: start position, and end position(end not included).

let text2 = "Naveen Ul Haq";
let part1 = text2.slice(2, 5); // includes 2 but not 5 (2,3,4)

// JavaScript counts positions from zero, first position is 0, second position is 1.

console.log(part1);

let text3 = "AB Devilliers";
let part2 = text3.slice(2, 8); // includes 2 but not 8 (2,3,4,5,6,7)

console.log(part2);

// If you omit the second parameter, the method will slice out the rest of the string

let text4 = "Christopher Henry Gayle";
let part3 = text4.slice(5);

console.log(part3);

// If a parameter is negative, the position is counted from the end of the string

let part4 = text4.slice(-18);

console.log(part4);

// string from position -16 to -8

let part5 = text4.slice(-16, -8); // (-8, -16) is not supported

console.log(part5);

// substring() is similar to slice(), but -(negative) positions are not allowed

let text5 = "David Warner";
let part6 = text5.substring(2, 9);

console.log(part6);

let part7 = text5.substring(-4); // this will return full string

console.log(part7);

// substr() is similar to slice(), but the second parameter specifies the length of the extracted part.

let text6 = "Mitchell Stark";
let part8 = text6.substr(4, 7); // this will return 7 characters from position 4

console.log(part8);

// If you omit the second parameter, substr() will slice out the rest of the string.

let part9 = text6.substr(3); // this will return all characters from position 3

console.log(part9);

// If the first parameter is negative, the position counts from the end of the string.

let part10 = text6.substr(-8); // this will return all characters from position -8

console.log(part10);

// replace() method replaces a specified value with another value in a string

let text7 = "Hardik Pandya";
let part11 = text7.replace("Hardik", "Krunal"); // replace() is case-sensitive

/* The replace() method does not change the string it is called on, it returns a new string & replaces only
the first match */

console.log(part11);

// To replace all matches, use a regular expression with a / g flag(global match)

let text8 = "Disco, Disco, Disco Deewane!";
let part12 = text8.replace(/Disco/g, "Dance"); // g is for global match

console.log(part12);

// A string is converted to upper case with toUpperCase()

let text9 = "I am a Devil of My World!";
let part13 = text9.toUpperCase();

console.log(part13);

// A string is converted to lower case with toLowerCase()

let part14 = text9.toLowerCase();

console.log(part14);

// concat() joins two or more strings

let _text1 = "Hello";
let _text2 = "World";
let _text3 = text1.concat(" ", text2); // this can be used instead of the plus operator

console.log(_text3);

// trim() method removes whitespace from both sides of a string, but it will not remove space between the words

let _text4 = "   Hello World     ";
let _part1 = _text4.trim(); // this will remove the whitespace from both sides of the string

console.log(_part1);

// trimStart() method works like trim(), but removes whitespace only from the start of a string.

let _part2 = _text4.trimStart(); // this will remove the whitespace only from the start of the string

console.log(_part2);

// trimEnd() method works like trim(), but removes whitespace only from the end of a string.

let _part3 = _text4.trimEnd(); // this will remove the whitespace only from the end of the string

console.log(_part3);

// padStart() method pads a string from the start.

let _text5 = "24";
let _part4 = _text5.padStart(5, "0"); // this will pad the string from the start with 0's

// To pad a number, convert the number to a string first.

console.log(_part4);

// padEnd() method pads a string from the end.

let _part5 = _text5.padEnd(5, "0"); // this will pad the string from the end with 0's

console.log(_part5);

let _text6 = "5";
let _part6 = _text6.padStart(5, "#"); // this will pad the string from the start with #'s

console.log(_part6);

let _part7 = _text6.padEnd(5, "#"); // this will pad the string from the end with #'s

console.log(_part7);

// 3 methods for extracting string characters

// charAt() method returns the character at a specified index (position) in a string

let _text7 = "SANKET TALAVIYA";

console.log(_text7.charAt(0)); // this will return the first character of the string

console.log(_text7.charAt(9)); // this will return the tenth character of the string

// charCodeAt() method returns the unicode of the character at a specified index in a string

console.log(_text7.charCodeAt(0)); // this will return the unicode of the first character of the string

console.log(_text7.charCodeAt(7)); // this will return the unicode of the tenth character