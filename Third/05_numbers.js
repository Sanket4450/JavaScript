// JavaScript has only one type of number.Numbers can be written with or without decimals.

let a = 24;    // number without decimals
console.log(a);

let b = 14.47; // number with decimals
console.log(b);

// Extra large or extra small numbers can be written with scientific(exponent) notation

let c = 34e5; // 5 zero after 34
console.log(c);

let d = 34e-5; // total 5 points including 34 after the decimal
console.log(d);

// JavaScript numbers are always stored as double precision floating point numbers

// Integers(numbers without a period or exponent notation) are accurate up to 15 digits

let e = 999999999999999; // 15 digits (not rounded up)
console.log(e);

let f = 9999999999999999; // 16 digits (rounded up)
console.log(f);

// The maximum number of decimals is 17.

let g = 1234567890.1234567; // total 17 digits
console.log(g);

let h = 1.1234567890123456; // total 17 digits
console.log(h);

let i = 1234567890.123456789 // can't store more than 17 digits
console.log(i);

// Floating point arithmetic is not always 100 % accurate

let j = 0.2 + 0.1;
console.log(j);

// To solve the problem above, it helps to multiply and divide

let k = (0.2 * 10 + 0.1 * 10) / 10;
console.log(k);

// JavaScript uses the + operator for both addition and concatenation.

// If you add two numbers, the result will be a number

let _a = 10;
let _b = 20;
let _c = _a + _b; // will be a number
console.log(_c);

// If you add two strings, the result will be a string concatenation

let _d = "10";
let _e = "20";
let _f = _d + _e; // will be a concatenation
console.log(_f);

// If you add a number and a string or a string and a number, the result will be a string concatenation

let _g = 10;
let _h = "20";
let _i = _g + _h; // will be a concatenation
console.log(_i);

let _j = "10";
let _k = 20;
let _l = _j + _k; // will be a concatenation
console.log(_l);

// A common mistake is to expect this result to be 30

let m = 10;
let n = 20;
let o = "The result is : " + m + n; // will be a concatenation
console.log(o);

// A common mistake is to expect this result to be 102030

let p = 10;
let q = 20;
let r = "30";
let result = p + q + r; // 10 + 20 + "30"
// JavaScript interpreter works from left to right.
// First 10 + 20 is added because p and q are both numbers then 30 + "30" is concatenated because r is a string.
console.log(result);

// JavaScript will try to convert strings to numbers in all numeric operations

let s = "10";
let t = "20";
let u = s / t; // converted strings into number while division operation
console.log(u);

let v = s * t; // this will also work like the same
console.log(v);

let w = s - t; // this will also work like the same
console.log(w);

let x = s + t; // but this won't work like the same
console.log(x);

// In the last example JavaScript uses the + operator to concatenate the strings.

/* NaN is a JavaScript reserved word indicating that a number is not a legal number, trying to do arithmetic
with a non-numeric string will result in NaN (Not a Number) */

let _m = 10 / "Sanket"; // this will be NaN (Not a Number)
console.log(_m);

let _n = 10 / "5"; // this won't be NaN (Not a Number) as it is a numeric string
console.log(_n);

// You can use the global JavaScript function isNaN() to find out if a value is a not a number

console.log(isNaN(_m)); // true
console.log(isNaN(_n)); // false

// If you use NaN in a mathematical operation, the result will also be NaN

let _o = NaN;
let _p = 5;
let _q = _o + _p; // will be NaN
console.log(_q);

// Or the result might be a concatenation like NaN5

let _r = NaN;
let _s = "5";
let _t = _r + _s; // will be concatenation like NaN5
console.log(_t);

// NaN is a number: typeof NaN returns number

console.log(typeof NaN); // number

// Division by 0 (zero) generates Infinity

let _u = 10 / 0; // Infinity
console.log(_u);

let _v = "10" / 0; // Infinity
console.log(_v);

let _w = -10 / 0; // -Infinity
console.log(_w);

// Infinity is a number: typeof Infinity returns number.

console.log(typeof Infinity); // number

// JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.

let _x = 0x10; // 16
console.log(_x);

let _y = 0xF1 // 241
console.log(_y);

let _z = 0xEf2; // 3826
console.log(_z);

/* Never write a number with a leading zero(like 07), Some JavaScript versions interpret numbers as octal
if they are written with a leading zero. */

// you can use the toString() method to output numbers from base 2 to base 36.

let number = 32;

let num1 = "Binary (base 2)          : " + number.toString(2);
let num2 = "Octal (base 8)           : " + number.toString(8);
let num3 = "Decimal(base 10)         : " + number.toString(10);
let num4 = "Duodecimal (base 12)     : " + number.toString(12);
let num5 = "Hexadecimal (base 16)    : " + number.toString(16);
let num6 = "Duotrigesimal (base 32)  : " + number.toString(32);
let num7 = "Hexatrigesimal (base 36) : " + number.toString(36);

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(num7);