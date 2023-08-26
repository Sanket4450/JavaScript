/* JavaScript BigInt variables are used to store big integer values that are too big to
be represented by a normal JavaScript Number. */

// JavaScript integers are only accurate up to 15 digits

let a = 999999999999999;
console.log(a);

let b = 9999999999999999;
console.log(b);

// To create a BigInt, append n to the end of an integer or call BigInt()

let c = 12345678901234567890n;
console.log(c);

let d = BigInt(12345678901234567890);
console.log(d);

// JavaScript typeof a BigInt is "bigint"

let e = BigInt(12345678901234567890);
console.log(typeof e);

// Operators that can be used on a JavaScript Number can also be used on a BigInt.

let f = 12345678901234567890n;
let g = 12345678901234567890n;
let h = f * g;
console.log(h);

// BigInt can not have decimals.
// Cannot mix BigInt and other types, use explicit conversion.

// BigInt can also be written in hexadecimal, octal, or binary notation

// Number.isInteger() method returns true if the argument is an integer.

// Safe integers are all integers from - (253 - 1) to + (253 - 1).
// from -9007199254740991 to +9007199254740991