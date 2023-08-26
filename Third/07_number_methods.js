// toString() method returns a number as a string.

let a = 123;

console.log(a.toString());
console.log((123).toString());
console.log((100 + 23).toString());

// toExponential() returns a string, with a number rounded and written using exponential notation.

let b = 12.66;

console.log(b.toExponential(2));
console.log(b.toExponential(4));
console.log(b.toExponential(6));

// toFixed() returns a string, with the number written with a specified number of decimals

let c = 24.562;

console.log(c.toFixed(0));
console.log(c.toFixed(2)); // toFixed(2) is perfect for working with money.
console.log(c.toFixed(4));

// toPrecision() returns a string, with a number written with a specified length

let d = 25.672;

console.log(d.toPrecision());
console.log(d.toPrecision(2));
console.log(d.toPrecision(4));
console.log(d.toPrecision(6));

// valueOf() returns a number as a number.

let e = 123;
console.log(e.valueOf());
console.log((123).valueOf());
console.log((100 + 23).valueOf());

// Number() method can be used to convert JavaScript variables to numbers

console.log(Number(true));
console.log(Number(false));
console.log(Number("10"));
console.log(Number("  10"));
console.log(Number("10  "));
console.log(Number(" 10  "));
console.log(Number("10.33"));
console.log(Number("10,33"));
console.log(Number("10 33"));
console.log(Number("John"));

// If the number cannot be converted, NaN(Not a Number) is returned.

// parseInt() parses a string and returns a whole number.Spaces are allowed.Only the first number is returned

console.log(parseInt("-10"));
console.log(parseInt("-10.33"));
console.log(parseInt("10"));
console.log(parseInt("10.33"));
console.log(parseInt("10 20 30"));
console.log(parseInt("10 years"));
console.log(parseInt("years 10"));

// parseFloat() parses a string and returns a number.Spaces are allowed.Only the first number is returned

console.log(parseFloat("10"));
console.log(parseFloat("10.33"));
console.log(parseFloat("10 20 30"));
console.log(parseFloat("10 years"));
console.log(parseFloat("years 10"));

// Number.isInteger() method returns true if the argument is an integer.

console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));

// Number.isSafeInteger() method returns true if the argument is a safe integer.

console.log(Number.isSafeInteger(10));
console.log(Number.isSafeInteger(10.5));
console.log(Number.isSafeInteger(12345678901234567));

// Number.parseFloat() parses a string and returns a number.

console.log(Number.parseFloat("10"));
console.log(Number.parseFloat("10.33"));
console.log(Number.parseFloat("10 20 30"));
console.log(Number.parseFloat("10 years"));
console.log(Number.parseFloat("years 10"));

// Number.parseInt() parses a string and returns a whole number.

console.log(Number.parseInt("-10"));
console.log(Number.parseInt("-10.33"));
console.log(Number.parseInt("10"));
console.log(Number.parseInt("10.33"));
console.log(Number.parseInt("10 20 30"));
console.log(Number.parseInt("10 years"));
console.log(Number.parseInt("years 10"));