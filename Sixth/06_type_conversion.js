// JavaScript variables can be converted to a new variable and another data type

// Number() converts a variable(or a value) into a number.

// A numeric string(like "3.14") converts to a number(like 3.14).

console.log(Number("3.14"));
console.log(Number("1"));

// An empty string(like "") converts to 0.

console.log(Number(""));
console.log(Number("   "));

// A non numeric string(like "John") converts to NaN(Not a Number).

console.log(Number("John"));
console.log(Number("123 Peter"));

// unary + operator can be used to convert a variable to a number

let a = "24"; // x is a string
let b = + a; // convert x to a number
console.log(typeof(a));
console.log(typeof(b));

// If the variable cannot be converted, it will still become a number, but with the value NaN(Not a Number)

let c = "John";
let d = + c; // convert x to a number(NaN)
console.log(typeof(c));
console.log(typeof(d));

// global method String() can convert numbers to strings.

let e = 10;

console.log(typeof String(3.14));
console.log(typeof String(0));
console.log(typeof String(NaN));
console.log(typeof String(100 + 15));
console.log(typeof String(e));

// Number method toString() does the same.

console.log(typeof e.toString());
console.log(typeof (243).toString());
console.log(typeof (0 + 12 * 12).toString());

// toExponential() returns a string, with a number rounded and written using exponential notation.

console.log((3.125).toExponential());
console.log((3.125).toExponential(2));

// toFixed() returns a string, with a number rounded and written with a specified number of decimals.

console.log((3.125).toFixed());
console.log((3.125).toFixed(2));

// toPrecision() returns a string, with a number written with a specified length.

console.log((3.125).toPrecision());
console.log((3.125).toPrecision(2));

// global method Number() can be used to convert dates to numbers.

let f = new Date();
console.log(Number(f));

// date method getTime() does the same.

let g = new Date();
console.log(g.getTime());

// global method String() can convert dates to strings.

let h = new Date();
console.log(String(h));

// Date method toString() does the same.

let i = new Date();
console.log(i.toString());

// global method Number() can also convert booleans to numbers.

console.log(Number(true));
console.log(Number(false));

// global method String() can convert booleans to strings.

console.log(typeof String(true));
console.log(typeof String(false));

// Boolean method toString() does the same.

console.log(typeof true.toString());
console.log(typeof false.toString());

// When JavaScript tries to operate on a "wrong" data type, it will try to convert the value to a "right" type.

console.log(5 + null);
console.log("5" + null);
console.log("5" + 2);
console.log("5" - 2);
console.log("5" * "2");

// JavaScript automatically calls the variable's toString() function when you try to "output" an object or a variable

