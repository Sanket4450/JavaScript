// A JavaScript Boolean represents one of two values: true or false.

/* in programming, you will need a data type that can only have one of two values, For this, JavaScript has
a Boolean data type. */

// You can use the Boolean() function to find out if an expression(or a variable) is true

console.log(Boolean(10)); // true

console.log(Boolean(10 > 9)); // true

console.log(Boolean(10 < 9)); // false

// we can write in a shorter way only with () like this...
console.log((10 > 9)); // true

// we can write even more shorter way without any () like this...
console.log(10 < 9); // false

// Everything With a "Value" is True

console.log(Boolean(15)); // true
console.log(Boolean("12")); // true
console.log(Boolean("-14")); // true
console.log(Boolean("0")); // true
console.log(Boolean("Sanket")); // true
console.log(Boolean("true")); // true
console.log(Boolean("false")); // true

// Only 2 things will be false

console.log(Boolean(0)); // false
console.log(Boolean(false)); // false

// 0 & false written in string will be true, only plain value is false

// Everything Without a "Value" is False

let a = 0;
console.log(Boolean(a)); // false

let b = -0;
console.log(Boolean(b)); // false

let c = ""; // empty string
console.log(Boolean(a)); // false

let d; // undefined
console.log(Boolean(d)); // false

let e = null;
console.log(Boolean(e)); // false

let f = NaN;
console.log(Boolean(f)); // false

let g = 10 / "Sanket"; // NaN expression
console.log(Boolean(g)); // false

/* booleans can also be defined as objects with the keyword new but don't create Boolean objects. The new
keyword complicates the code and slows down execution speed. */