// A regular expression is a sequence of characters that forms a search pattern.

// search() method uses an expression to search for a match, and returns the position of the match.

let a = "Oggy and the Cockroaches";
console.log(a.search("the")); // returns position of the first occurrence

// this is case sensitive, The cannot be written instead of the

// but we can write case-insensitive search with regular expressions

console.log(a.search(/The/i)); // in this, The is equal to the

// replace() method replaces a specified value with another value in a string

let b = "Control Uday Control, Control Uday";
console.log(b.replace("Uday", "Majnu")); // returns Majnu insead of Uday but only for first match

// this is case sensitive, uday cannot be written instead of Uday

// but we can replace through case-insensitive with regular expressions

console.log(b.replace(/uday/i, "Majnu")); // still returns Majnu instead of Uday

// above statements only search & replace the first match but with regular expressions we can replace all matches

console.log(b.replace(/Uday/g, "Majnu")); // returns Majnu for all Uday

// we can mix g & i like this...

console.log(b.replace(/uday/gi, "Majnu")); // returns Majnu for all Uday with case insensitive

// text() method searches a string for a pattern, and returns true or false, depending on the result.

console.log(/abc/.test("abcdefghijklmn"));
console.log(/Abc/i.test("aBCejndejnd"));