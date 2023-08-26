// Math object allows you to perform mathematical tasks on numbers.

// Unlike other objects, the Math object has no constructor, It is an static object.

// syntax for any Math property is: Math.property.

// 8 mathematical constants

let a = Math.E;
console.log(a);

let b = Math.PI;
console.log(b);

let c = Math.SQRT2;
console.log(c);

let d = Math.SQRT1_2;
console.log(d);

let e = Math.LN2;
console.log(e);

let f = Math.LN10;
console.log(f);

let g = Math.LOG2E;
console.log(g);

let h = Math.LOG10E;
console.log(h);

// syntax for Math any methods is: Math.method(number)

// Math.round(x) returns the nearest integer

console.log(Math.round(4.6));
console.log(Math.round(4.5));
console.log(Math.round(4.4));
console.log(Math.round(-4.4));
console.log(Math.round(-4.5));
console.log(Math.round(-4.6));

// Math.ceil(x) returns the value of x rounded up to its nearest integer

console.log(Math.ceil(4.6));
console.log(Math.ceil(4.5));
console.log(Math.ceil(4.4));
console.log(Math.ceil(-4.4));
console.log(Math.ceil(-4.5));
console.log(Math.ceil(-4.6));

// Math.floor(x) returns the value of x rounded down to its nearest integer

console.log(Math.floor(4.6));
console.log(Math.floor(4.5));
console.log(Math.floor(4.4));
console.log(Math.floor(-4.4));
console.log(Math.floor(-4.5));
console.log(Math.floor(-4.6));

// Math.trunc(x) returns the integer part of x

console.log(Math.trunc(4.9));
console.log(Math.trunc(4.5));
console.log(Math.trunc(4.0));
console.log(Math.trunc(-4.0));
console.log(Math.trunc(-4.5));
console.log(Math.trunc(-4.9));

// Math.sign(x) returns if x is negative, null or positive

console.log(Math.sign(4));
console.log(Math.sign(0));
console.log(Math.sign(-4));
console.log(Math.sign(4.5));

// Math.pow(x, y) returns the value of x to the power of y

console.log(Math.pow(3, 4));
console.log(Math.pow(-4, 2));
console.log(Math.pow(-4, 3));
console.log(Math.pow(4, -2));
console.log(Math.pow(-4, -2));
console.log(Math.pow(-4, -3));

// Math.sqrt(x) returns the square root of x

console.log(Math.sqrt(4));
console.log(Math.sqrt(-4));
console.log(Math.sqrt(24));
console.log(Math.sqrt(1));
console.log(Math.sqrt(0));

// cbrt(x) returns the cubic root of x

console.log(Math.cbrt(8));
console.log(Math.cbrt(-8));
console.log(Math.cbrt(4));
console.log(Math.cbrt(1));
console.log(Math.cbrt(0));

// Math.abs(x) returns the absolute(positive) value of x

console.log(Math.abs(4));
console.log(Math.abs(-4));
console.log(Math.abs(0));
console.log(Math.abs(4.5));
console.log(Math.abs(-4.5));

// Math.sin(x) returns the sine(a value between - 1 and 1) of the angle x(given in radians).

// Math.cos(x) returns the cosine(a value between - 1 and 1) of the angle x(given in radians).

// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments

console.log(Math.min(20, 150, 0, -20, -230));
console.log(Math.max(20, 150, 0, -20, -230));

// Math.random() returns a random number between 0(inclusive), and 1(exclusive)

console.log(Math.random());

// Math.log(x) returns the natural logarithm of x.

console.log(Math.log(40));
console.log(Math.log(1));
console.log(Math.log(0));
console.log(Math.log(-40));

// Math.log2(x) returns the base 2 logarithm of x.

console.log(Math.log2(40));
console.log(Math.log2(1));
console.log(Math.log2(0));
console.log(Math.log2(-40));

// Math.log10(x) returns the base 10 logarithm of x.

console.log(Math.log2(40));
console.log(Math.log2(1));
console.log(Math.log2(0));
console.log(Math.log2(-40));